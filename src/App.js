import React from 'react';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';
import Bio from './pages/Bio';
import Instagram from './pages/Instagram';
import MichaelFadugbagbe from './pages/MichaelFadugbagbe';

//React.Fragment tag means a component (the navbar) contains a list of children components.
const App = () => {
  return (
     <>
      <Navbar />
      <div className="container">
        <Routes>
           <Route path="/" element={<MichaelFadugbagbe />} />
           <Route path="/Instagram" element={<Instagram />} />
           <Route path="/bio" element={<Bio />} />
        </Routes>
        </div>
     </>
  );
 };


export default App;
