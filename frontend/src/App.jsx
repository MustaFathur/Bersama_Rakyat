// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import ProgramPemerintah from './components/ProgramPemerintah';
import PemerintahPusat from './components/PemerintahPusat';
import PresidentAndVicePresident from './components/ProgramPresiden';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/beranda" element={<Homepage />} />
          {/* <Route path="/beranda" element={<Beranda />} /> */}
          <Route path="/program" element={<ProgramPemerintah />} />
          <Route path="/program/pemerintah-pusat" element={<PemerintahPusat />} />
          <Route path="/program/pemerintah-pusat/presiden" element={<PresidentAndVicePresident />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
