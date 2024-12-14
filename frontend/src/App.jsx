import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Program from './components/Program';
// import Pusat from './components/Pusat';
// import Presiden from './components/Presiden';
// import MakanSiang from './components/MakanSiang';
// import Forum from './components/Forum';
// import DetailForum from './components/DetailForum';
// import Berita from './components/Berita';

const App = () => {
  return (
    <Router>
      <div className='min-h-screen flex flex-col'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
