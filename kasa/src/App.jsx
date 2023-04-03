import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/header/Header';
import Logements from './pages/Logements/Logements';

function App () {
    return (
        <div className='App'> 
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Logements" element={<Logements/>} />
        </Routes>
        </div>
    );
};

export default App
