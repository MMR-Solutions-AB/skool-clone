import React from 'react';
import './Post.css';

function Post() {
    return (
        <div className="Post">
            <div className="pinned-top-banner">
                <span>Pinned</span>
                <button>Hide</button>
            </div>
            <div className="author-container">
                <img src="/mock-data/profile-pic.jpeg" />
                <p className="author-name">Matt Bergström</p>
                <p>49m ago in Announcements</p>
            </div>
            <div className="post-content">
                <h3>Title</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ea adipisci a! Corporis architecto et deserunt, sequi delectus, dolorem suscipit dolor ullam eum dignissimos nesciunt, voluptatem quod expedita harum debitis?</p>
            </div>
            <div className="poll-container">
                <button>Poll</button>
                <span> 10 members have voted</span>
            </div>
            <div className="post-footer">
                <img src='/icons/dms.svg' /> 2
                <img src='/icons/dms.svg' /> 6
                <img src="/mock-data/profile-pic.jpeg" />
                <img src="/mock-data/profile-pic.jpeg" />
                <img src="/mock-data/profile-pic.jpeg" />
                Last comment 29m ago
            </div>
        </div>
    );
}

export default Post;
