require('dotenv').config();
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('../db/db.cjs');

const router = express.Router();
const JWT_SECRET ='30850651b750966c4d38c7cd9407d4c29400a9b6e5f6ea966792b40117186bf3';
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET environment variable is not defined');
}
console.log('JWT Secret:',JWT_SECRET);


router.post('/register', async (req, res) => {
    const { username, email, password, role = 'user' } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const result = await pool.query(
        'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role, created_at',
        [username, email, hashedPassword, role]
      );
      
  
      const user = result.rows[0];
  
      // ✅ Generate JWT after successful registration
      const token = jwt.sign(
        { id: user.id, username: user.username, role: user.role },
        JWT_SECRET,
        { expiresIn: '1h' }
      );
  
      // ✅ Save token in DB if needed
      await pool.query('UPDATE users SET jwt_token = $1 WHERE id = $2', [token, user.id]);
  
      const { password: _, ...userWithoutPassword } = user;
  
      res.status(201).json({ message: 'User registered successfully', token, user: userWithoutPassword });
    } catch (err) {
      console.error(err);
      if (err.code === '23505') {
        return res.status(400).json({ message: 'Email already exists' });
      }
      res.status(500).json({ message: 'Error registering user' });
    }
  });
  
// router.post('/register', async (req, res) => {
//   const { username, email, password, role = 'user' } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const result = await pool.query(
//       'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, username, email, role, created_at',
//       [username, email, hashedPassword, role]
//     );

//     const user = result.rows[0];
//     res.status(201).json({ message: 'User registered successfully', user });
//   } catch (err) {
//     console.error(err);
//     if (err.code === '23505') {
//       return res.status(400).json({ message: 'Email already exists' });
//     }
//     res.status(500).json({ message: 'Error registering user' });
//   }
// });

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    await pool.query('UPDATE users SET jwt_token = $1 WHERE id = $2', [token, user.id]);

    const { password: _, ...userWithoutPassword } = user;
    res.json({ message: 'Login successful', token, user: userWithoutPassword });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error logging in' });
  }
});

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = decoded;
    next();
  });
};

router.get('/profile', verifyToken, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, username, email, role FROM users WHERE id = $1',
      [req.user.id]
    );
    const user = result.rows[0];
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});

module.exports = router;
