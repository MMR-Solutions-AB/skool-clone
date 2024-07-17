import React from 'react';
import './CommunityPage.css';

import Post from '../../components/Post/Post';

const mockPost = {
    title: "LIVE NU",
    richText: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore temporibus dolorem perferendis! Quae itaque impedit, distinctio asperiores quam sit harum accusantium, maiores pariatur voluptatem blanditiis rerum quidem fuga iusto repellat.",
    pinned: {
        isPinned: true,
        pinnedAt: new Date(),
    },
    poll: {
        choices: [
            {
                choiceText: "Choice 1",
                votes: ["1", "2", "8"],
            },
            {
                choiceText: "Choice 2",
                votes: ["1", "2", "8"],
            }
        ]
    },
    likes: ["1", "2", "3"],
    comments: [
        {
            authorId: "2",
            text: "test",
            likes: ["1", "2"],
            images: ["www.google.com"],
            createdAt: new Date()
        },
        {
            authorId: "3",
            text: "Lol",
            likes: ["1"],
            images: ["www.google.com"],
            createdAt: new Date()
        },
    ]
}


function CommunityPage() {
    return (
        <div id="CommunityPage" className="page">
            <Post post={mockPost} />
        </div>
    );
}

export default CommunityPage;
