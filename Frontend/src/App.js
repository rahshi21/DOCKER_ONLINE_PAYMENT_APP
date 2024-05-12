import './App.css';
import React from 'react';
import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import About from './about'
import Display from './display';
import Money from './money';
import Events from './Events';
import Contact from './Contact';
import Home from './Home';
import Gallery from './Gallery';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/display' element={<Display />} />
        <Route path='/money' element={<Money />} />
        <Route path='/events' element={<Events/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/gallery' element={<Gallery/>} />
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
