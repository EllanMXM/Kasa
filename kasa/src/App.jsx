import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import Location from './components/location/Location';
import APropos from './pages/Apropos/Apropos';
import Logements from './pages/logements/Logements';


function App () {
  return (
    <div className='App'> 
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Logements/:id" element={<Location />} />
        <Route path="/Logements" element={<Logements />} />
        <Route path="/Apropos" element={<APropos />}/>
      </Routes>
    </div>
  );
};

export default App