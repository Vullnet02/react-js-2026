import  './Home.css';
import './About.css';
import './Navbar.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
import Login from './pages/LoginPage';
import Product from './components/Product';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginpage" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productdetails" element={<ProductDetails />} />

      </Routes>
    </>
  );
}

export default App;
