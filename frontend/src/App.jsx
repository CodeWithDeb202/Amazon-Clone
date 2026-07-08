import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import Navbar from './commonPages/Navbar'
import SubNav from './commonPages/SubNav'
import Home from './landingPages/home/Home';
import Personalize from './commonPages/Personalize'
import Back from './commonPages/Back'
import Contact from './commonPages/Contact'
import Footer from './commonPages/Footer'
import Location from './usagePages/Location'
import Signin from './landingPages/signup/Signin'

function App() {
  const [userLocation, setUserLocation] = useState(() => {
    const savedLocation = localStorage.getItem('userLocation');
    if(savedLocation){
      return JSON.parse(savedLocation);
    }
    return{
      district:'',
      pincode:''
    }
  });

  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/location' element={
          <>
            <Navbar userLocation={userLocation}/>
            <SubNav/>
            <Home/>
            <Personalize/>
            <Back/>
            <Contact/>
            <Footer/>
            <Location setUserLocation={setUserLocation}/>
          </>
        }/>
        <Route path='/' element={
          <>
            <Navbar userLocation={userLocation} />
            <SubNav />
            <Home />
            <Personalize />
            <Back />
            <Contact />
            <Footer />      
          </>
        }/>

        <Route path='/signin' element={<Signin/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;