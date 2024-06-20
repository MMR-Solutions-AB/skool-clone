
import './Navbar.css';

function Navbar() {
    return (
        <div className="Navbar">
            <nav>
                {/* Skool Public Nav */}
                <div id="skool-nav">
                    <div className="skool-nav-item">
                        <img id="community-logo" src="/mock-data/ps-logo.jpeg" />
                        Programmering Sverige
                        <i>MENU</i>
                    </div>
                    <div className="skool-nav-item">
                        <input type="text"></input>
                    </div>
                    <div className="skool-nav-item">
                        <i>DMs</i>
                        <i>Notiser</i>
                        <img id="profile-picture" src="/mock-data/profile-pic.jpeg" />
                    </div>
                </div>

                {/* Community Specific nav */}
                <div id="community-nav">
                    <div className="community-nav-item">
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
            </nav>
        </div>
    );
}

export default Navbar;
