// import logo from './logo.svg';
import  './Home.css';
import './About.css';
import './Navbar.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
// import Contact from './components/Contact';
// import Navbar from "./components/Navbar";
// import Product from './components/Product';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
  );
}

export default App;
