const express = require('express');
const router = express.Router();
const {pool} = require('../db/db.cjs');

router.post('/', async (req, res) => {
  try {
    const {
      title, information, time, image, description,
      recommended_img1, recommended_title1, recommended_des1,
      recommended_img2, recommended_title2, recommended_des2
    } = req.body;

    const result = await pool.query(
      `INSERT INTO blogs (title, information, time, image, description,
       recommended_img1, recommended_title1, recommended_des1,
       recommended_img2, recommended_title2, recommended_des2)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`,
      [title, information, time, image, description,
        recommended_img1, recommended_title1, recommended_des1,
        recommended_img2, recommended_title2, recommended_des2]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM blogs ORDER BY id DESC');
        res.json(result.rows); 
    } catch (err) {
        console.error('Error fetching blogs:', err);
        res.status(500).json({ error: 'Error fetching blogs', details: err.message });
    }
});

  
router.get('/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs WHERE id = $1', [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blog' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      title, information, time, image, description,
      recommended_img1, recommended_title1, recommended_des1,
      recommended_img2, recommended_title2, recommended_des2
    } = req.body;

    const result = await pool.query(
      `UPDATE blogs SET title=$1, information=$2, time=$3, image=$4, description=$5,
       recommended_img1=$6, recommended_title1=$7, recommended_des1=$8,
       recommended_img2=$9, recommended_title2=$10, recommended_des2=$11
       WHERE id=$12 RETURNING *`,
      [title, information, time, image, description,
        recommended_img1, recommended_title1, recommended_des1,
        recommended_img2, recommended_title2, recommended_des2,
        req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Error updating blog' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM blogs WHERE id = $1', [req.params.id]);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting blog' });
  }
});

module.exports = router;
