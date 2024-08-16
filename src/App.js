import './App.css';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Navbar from "../src/components/Navbar/Navbar.jsx";
import Container from "../src/components/Container/Container.jsx";
import CommunityPage, { postsLoader } from './pages/CommunityPage/CommunityPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<CommunityPage />} loader={postsLoader} />
        <Route path="/classroom" element={<div>Classroom</div>} />
        <Route path="/calendar" element={<div>Calendar</div>} />
        <Route path="/members" element={<div>Members</div>} />
        <Route path="/leaderboard" element={<div>Leaderboard</div>} />
        <Route path="/about" element={<div>About</div>} />
      </>
    )
  );

  return (
    <div id="App">
      <Navbar />
      <div id="pages-wrapper">
        <Container>
          <RouterProvider router={router} />
        </Container>
      </div>
    </div>
  );
}

export default App;
