import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../front end/pages/home';
import OrderForm from '../front end/pages/orderForm';
import ProductDetail from '../front end/pages/product_view_page';
import Explore from '../front end/pages/explore';
import BlogDetail from '../front end/pages/blogs';
import Demo from '../front end/pages/demo';
import MoreBlogs from '../front end/pages/blogs_all';
import LoginRegister from '../front end/pages/Login.Register';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path='/Explore' element={<Explore />} />
        <Route path="/blog/:blogId" element={<BlogDetail />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/allblogs" element={<MoreBlogs />} />
      </Routes>
    </Router>
  );
}

export default App;
