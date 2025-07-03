import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import blogRoutes from './routes/blogRoutes.js'
import productRoutes from './routes/produtcRoute.js'
import cors from 'cors';

dotenv.config();

const app = express();
const PORT =  10000;

app.use(cors(
  {
    origin: 'https://harmonious-mousse-8f19ec.netlify.app/',
    credentials: true
  }
));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/products', productRoutes);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
