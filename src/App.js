import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import logo from './logo.svg';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<div>Community Page here</div>} />
        <Route path="/classroom" element={<div>Classroom</div>} />
        <Route path="/calendar" element={<div>Calendar</div>} />
        <Route path="/members" element={<div>Members</div>} />
        <Route path="/leaderboard" element={<div>Leaderboard</div>} />
        <Route path="/about" element={<div>About</div>} />
      </Routes>
    </div>
  );
}

export default App;
