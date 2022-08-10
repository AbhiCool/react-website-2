import React from 'react'; 
import './App.css';

import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/Contact';

import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Footer from './components/inc/Footer';
function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="*" element={<Navigate to="/"/>}></Route>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
