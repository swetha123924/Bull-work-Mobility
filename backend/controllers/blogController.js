import  pool  from '../db/db.js'


// Create a blog
export const createBlog = async (req, res) => {
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
    console.error('Error creating blog:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching blogs:', err);
    res.status(500).json({ error: 'Error fetching blogs', details: err.message });
  }
};

// Get blog by ID
export const getBlogById = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM blogs WHERE id = $1', [req.params.id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error fetching blog:', err);
    res.status(500).json({ error: 'Error fetching blog' });
  }
};

// Update blog
export const updateBlog = async (req, res) => {
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
    console.error('Error updating blog:', err);
    res.status(500).json({ error: 'Error updating blog' });
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    await pool.query('DELETE FROM blogs WHERE id = $1', [req.params.id]);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    console.error('Error deleting blog:', err);
    res.status(500).json({ error: 'Error deleting blog' });
  }
};
