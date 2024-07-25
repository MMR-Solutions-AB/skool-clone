import React from 'react';
import './Post.css';

function Post({ post }) {

    {/* TODO: FIX TAGS "Author" */ }
    const author = {
        id: 1,
        name: "Matt Bergstrom",
        profileSrc: "https://via.placeholder.com/50"
    };

    const sumPollVotes = () => {
        if (!post.poll) {
            return null;
        }

        let sumVotes = 0;

        post.poll.choices.forEach((choice) => {
            sumVotes += choice.votes.length;
        });

        return sumVotes;
    }

    const sumVotes = sumPollVotes();


    function formatDate(date) {
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInMinutes < 60) {
            return `${diffInMinutes} minutes ago`;
        } else if (diffInHours < 24) {
            return `${diffInHours} h ago`;
        } else if (diffInDays < 7) {
            return `${diffInDays} days ago`;
        } else {
            const options = { month: 'short', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }
    }

    // Function to find the latest comment date
    function getLatestCommentDate(comments) {
        if (comments.length === 0) return null;

        let latestDate = comments[0].createdAt;

        console.log({ latestDate });

        for (const comment of comments) {
            if (comment.createdAt > latestDate) {
                latestDate = comment.createdAt;
            }
        }

        console.log({ latestDate });

        return latestDate;
    }

    const formattedPostTime = formatDate(post.createdAt);

    const latestCommentDate = getLatestCommentDate(post.comments);
    const formattedLastCommentTime = formatDate(latestCommentDate);

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
                            {/* TODO: FIX TAGS "Announcements" */}
                            <div className="time-info">{formattedPostTime} in Announcements</div>
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
                                    <span>{sumVotes} members have voted</span>
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
                            {/* TODO: FIX TAGS "Comment Profile Pics" */}
                            <div className="commenters">
                                <img src="https://via.placeholder.com/30" alt="commenter" />
                                <img src="https://via.placeholder.com/30" alt="commenter" />
                                <img src="https://via.placeholder.com/30" alt="commenter" />
                                <span>Last comment {formattedLastCommentTime} </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="gif">
                    <img src={post.images[0]} alt="GIF" />
                </div>
            </div>
        </div>
    );
}

export default Post;
