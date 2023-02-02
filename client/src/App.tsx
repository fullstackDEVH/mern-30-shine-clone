import React , {useEffect, useState}from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Booking from './pages/Booking/Booking';
import Discovery from './pages/Discovery/Discovery';
import Home from './pages/Home/Home';
import Journey from './pages/Journey/Journey';
import OtherServices from './pages/OtherServices/OtherServices';

import { useAppDispatch, useAppSelector } from './redux/hook';
import { setSalon } from './redux/slice/bookingSlice';

interface day {
  value : number;
  day : string;
}

function App() {
  const [overlay, setOverlay] = useState<boolean>(false);
  
  const count = useAppSelector((state) => state.booking);

  const dispatch = useDispatch();

  const doShowLogin = () => {
    setOverlay(pre => !pre);

    dispatch(setSalon("QNG"));
  };

 

  return (
    <div className="app">
      <Header doShowLogin={doShowLogin} />

        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/other-services' element={ <OtherServices />} />
          <Route path="/shine-journey" element = { <Journey /> } />
          <Route path="/explore-hairstyles" element = { <Discovery /> } />
          <Route path="/booking" element = { <Booking /> } />
        </Routes>
      
      <Footer />
      <Login doShowLogin={doShowLogin} overlay={overlay} />
    </div>
  );
}

export default App;
