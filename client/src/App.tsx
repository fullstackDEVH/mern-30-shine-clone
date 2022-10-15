import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import OtherServices from './pages/OtherServices/OtherServices';

function App() {
 
  
  return (
    <div className="container">
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/other-services' element={<OtherServices />} />
      </Routes>
    </div>
  );
}

export default App;
