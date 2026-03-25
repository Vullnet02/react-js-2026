import  './Home.css';
import './About.css';
import './Navbar.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import About from './pages/About';
import Login from './pages/LoginPage';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginpage" element={<Login />} />

      </Routes>
    </>
  );
}

export default App;
