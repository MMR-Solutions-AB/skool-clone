
import './Navbar.css';

import Container from './../Container/Container.jsx'; // Adjust the import path as necessary
// import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <Container>
                    {/* Skool Public Nav */}
                    <div id="skool-nav">
                        <div className="skool-nav-item">
                            <img id="community-logo" src="/mock-data/ps-logo.jpeg" />
                            <span id="community-name">Programmering Sverige</span>
                            <img src='/icons/collapse-menu.svg' />
                        </div>
                        <div id="search-bar" className="skool-nav-item">
                            <img src='/icons/search.svg' />
                            <input type="text" placeholder='Search'></input>
                        </div>
                        <div className="skool-nav-item">
                            <img src='/icons/dms.svg' />
                            <img src='/icons/notifications.svg' />
                            <img id="profile-picture" src="/mock-data/profile-pic.jpeg" />
                        </div>
                    </div>

                    {/* Community Specific nav */}
                    <div id="community-nav">
                        {/* <Link to="/" className="community-nav-item active">
                            Community
                        </Link>
                        <Link to="/classroom" className="community-nav-item">
                            Classroom
                        </Link>
                        <Link to="/calendar" className="community-nav-item">
                            Calendar
                        </Link>
                        <Link to="/members" className="community-nav-item">
                            Members
                        </Link>
                        <Link to="/leaderboard" className="community-nav-item">
                            Leaderboard
                        </Link>
                        <Link to="/about" className="community-nav-item">
                            About
                        </Link> */}
                    </div>
                </Container>
            </nav>
        </div>
    );
}

export default Navbar;
