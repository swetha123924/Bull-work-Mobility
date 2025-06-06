const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes.cjs'); 
const productRoutes = require('./routes/produtcRoute.cjs');
const blogRoutes = require('./routes/blogRoutes.cjs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
