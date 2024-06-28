
import './Navbar.css';

import Container from './../Container/Container.jsx'; // Adjust the import path as necessary

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                <Container>
                    {/* Skool Public Nav */}
                    <div id="skool-nav">
                        <div className="skool-nav-item">
                            <img id="community-logo" src="/mock-data/ps-logo.jpeg" />
                            Programmering Sverige
                            <img src='/icons/collapse-menu.svg' />
                        </div>
                        <div className="skool-nav-item">
                            <img src='/icons/search.svg' />
                            <input type="text"></input>
                        </div>
                        <div className="skool-nav-item">
                            <img src='/icons/dms.svg' />
                            <img src='/icons/notifications.svg' />
                            <img id="profile-picture" src="/mock-data/profile-pic.jpeg" />
                        </div>
                    </div>

                    {/* Community Specific nav */}
                    <div id="community-nav">
                        <div className="community-nav-item active">
                            Community
                        </div>
                        <div className="community-nav-item">
                            Classroom
                        </div>
                        <div className="community-nav-item">
                            Calendar
                        </div>
                        <div className="community-nav-item">
                            Members
                        </div>
                        <div className="community-nav-item">
                            Leaderboard
                        </div>
                        <div className="community-nav-item">
                            About
                        </div>
                    </div>
                </Container>
            </nav>
        </div>
    );
}

export default Navbar;
