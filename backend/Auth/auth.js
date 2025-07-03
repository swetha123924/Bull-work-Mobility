import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const verifyUser = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) return res.status(401).json({ error: 'No token provided' });

  const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
}
export const verifyAdmin = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
      return res.status(401).json({ message: 'No token provided' });
    }
    const token = authHeader.split(' ')[1];  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded token:", decoded);
  
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: 'Admin access required' });
      }
  
      req.user = decoded; 
      next();  
  }
  


