import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';

import CommunityPage from './pages/CommunityPage/CommunityPage';


function App() {
  return (
    <div id="App">
      <Navbar />
      <div id="pages-wrapper">
        <Container>
          <Routes>
            <Route path="/" element={<CommunityPage />} />
            <Route path="/classroom" element={<div>Classroom</div>} />
            <Route path="/calendar" element={<div>Calendar</div>} />
            <Route path="/members" element={<div>Members</div>} />
            <Route path="/leaderboard" element={<div>Leaderboard</div>} />
            <Route path="/about" element={<div>About</div>} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
