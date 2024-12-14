import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Program from './components/ProgramPemerintah';
import PemerintahPusat from './components/PemerintahPusat';
import Presiden from './components/Presiden';
import MakanSiang from './components/MakanSiang';
import Forum from './components/Forum';
import DetailForum from './components/DetailForum';
import Berita from './components/Berita';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/berita" element={<Berita />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/proker" element={<DetailForum />} />
          <Route path="/program" element={<Program />} />
          <Route path="/program/pemerintah-pusat" element={<PemerintahPusat />} />
          <Route path="/program/pemerintah-pusat/presiden" element={<Presiden />} />
          <Route path="/program/pemerintah-pusat/presiden/makan-siang" element={<MakanSiang />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
