import React from 'react';
import Header from './Component/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import BookNow from './Pages/booknow';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/about" element={<About />} /> {/* Example of another route */}
        <Route path="/services" element={<Services />}/>
        <Route path="/book-now" element={<BookNow />}/>
        <Route path="/contact" element={<Contact />} /> {/* Another example */}
      </Routes>
    </Router>
  );
}

export default App;
