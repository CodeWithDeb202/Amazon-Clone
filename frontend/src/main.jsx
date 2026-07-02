import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './landingPages/home/Home';
import Navbar from './commonPages/Navbar';
import SubNav from './landingPages/subNav/SubNav';
import Footer from './commonPages/Footer';
import Personalize from './commonPages/Personalize';
import Back from './commonPages/Back';
import Contact from './commonPages/Contact';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <SubNav />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Personalize />
    <Back />
    <Contact />
    <Footer />
  </BrowserRouter>
)
