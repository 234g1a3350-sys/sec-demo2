import React from "react";
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

function F1(){
    return(<BrowserRouter>
    <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/' element={<About/>}/>
        <Route path='/' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>)
}
export default F1;