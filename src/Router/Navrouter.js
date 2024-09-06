import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Navrouter = () => {
    return (
        <>
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact/>} />
            </Routes>
            
        </>
    )
}

export default Navrouter;