import React from 'react';
import './Post.css';

function Post({ post }) {

    const author = {
        id: 1,
        name: "Matt Bergstrom",
        profileSrc: "https://via.placeholder.com/50"
    };

    return (
        <div className="Post card">
            {post.pinned.isPinned ?
                (
                    <div className="card-header">
                        <div className="pinned">Pinned</div>
                        <div className="hide">Hide</div>
                    </div>
                )
                : null
            }
            <div className="card-wrapper">
                <div className="card-content">
                    <div className="author-info">
                        <img src={author.profileSrc} alt={author.name} className="avatar" />
                        <div className="author-details">
                            <div className="author-name">{author.name}</div>
                            <div className="time-info">9h ago in Announcements</div>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2>{post.title}</h2>
                        <p>
                            {post.richText}
                        </p>
                    </div>
                    <div className="card-footer">
                        {post.poll ?
                            (
                                <div className="poll">
                                    <button className="poll-button">Poll</button>
                                    <span>10 members have voted</span>
                                </div>
                            )
                            : null
                        }
                        <div className="interactions">
                            <div className="likes">
                                <span role="img" aria-label="thumbs up">👍</span> {post.likes.length}
                            </div>
                            <div className="comments">
                                <span role="img" aria-label="comments">💬</span> {post.comments.length}
                            </div>
                            <div className="commenters">
                                <img src="https://via.placeholder.com/30" alt="commenter" />
                                <img src="https://via.placeholder.com/30" alt="commenter" />
                                <img src="https://via.placeholder.com/30" alt="commenter" />
                                <span>Last comment 6h ago</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gif">
                    <img src="https://via.placeholder.com/100" alt="GIF" />
                </div>
            </div>
        </div>
    );
}

export default Post;
