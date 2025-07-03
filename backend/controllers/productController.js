import  pool  from '../db/db.js'

// Add a product (Admin Only)
export const addProduct = async (req, res) => {
  const {
    slug, title, image, description, features,
    saving_description, yearly_savings, seven_year_savings,
    related_beast, related_warrior, feature_image, powerup_video
  } = req.body;

  try {
    await pool.query(
      `INSERT INTO products (
        slug, title, image, description, features,
        saving_description, yearly_savings, seven_year_savings,
        related_beast, related_warrior, feature_image, powerup_video
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
      [
        slug, title, image, description, features,
        saving_description, yearly_savings, seven_year_savings,
        related_beast, related_warrior, feature_image, powerup_video
      ]
    );
    res.json({ message: "Product added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add product" });
  }
};

// Get all products
export const getAllProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching products" });
  }
};

// Get product by slug
export const getProductBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await pool.query("SELECT * FROM products WHERE slug = $1", [slug]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error fetching product" });
  }
};

// Update a product (Admin Only)
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    slug, title, image, description, features,
    saving_description, yearly_savings, seven_year_savings,
    related_beast, related_warrior, feature_image, powerup_video
  } = req.body;

  try {
    await pool.query(
      `UPDATE products SET
        slug = $1,
        title = $2,
        image = $3,
        description = $4,
        features = $5,
        saving_description = $6,
        yearly_savings = $7,
        seven_year_savings = $8,
        related_beast = $9,
        related_warrior = $10,
        feature_image = $11,
        powerup_video = $12
      WHERE id = $13`,
      [
        slug, title, image, description, features,
        saving_description, yearly_savings, seven_year_savings,
        related_beast, related_warrior, feature_image, powerup_video, id
      ]
    );
    res.json({ message: "Product updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Update failed" });
  }
};

// Delete a product (Admin Only)
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM products WHERE id = $1", [id]);
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Delete failed" });
  }
};
