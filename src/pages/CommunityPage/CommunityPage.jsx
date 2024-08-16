import React from 'react';
import './CommunityPage.css';

import Post from '../../components/Post/Post';

import { useLoaderData } from 'react-router-dom';

export async function postsLoader() {
    console.log("HERE2")
    const response = await fetch('http://localhost:3001/api/posts');
    console.log("HERE")
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
        console.log("HERE4")
    }
    console.log("HERE3")
    return response.json();
}

function CommunityPage() {
    const realPosts = useLoaderData();
    return (
        <div id="CommunityPage" className="page">
            {/* TODO: SOrtera i tid + pinned */}
            {realPosts.map((postData, index) => (<Post key={index} post={postData} />))}
        </div>
    );
}

export default CommunityPage;
