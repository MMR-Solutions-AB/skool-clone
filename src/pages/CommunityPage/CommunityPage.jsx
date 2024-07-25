import React from 'react';
import './CommunityPage.css';

import Post from '../../components/Post/Post';

import { faker } from '@faker-js/faker';

function generateMockPost() {
    return {
        title: faker.lorem.words(),
        richText: faker.lorem.paragraphs(),
        pinned: {
            isPinned: faker.datatype.boolean(),
            pinnedAt: faker.date.recent(),
        },
        poll: {
            choices: [
                {
                    choiceText: faker.lorem.words(),
                    votes: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, () => faker.string.uuid()),
                },
                {
                    choiceText: faker.lorem.words(),
                    votes: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, () => faker.string.uuid()),
                }
            ]
        },
        likes: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, () => faker.string.uuid()),
        comments: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
            authorId: faker.string.uuid(),
            text: faker.lorem.sentence(),
            likes: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => faker.string.uuid()),
            images: [faker.image.url()],
            createdAt: faker.date.recent()
        })),
        images: [faker.image.url(), faker.image.url()],
        createdAt: faker.date.recent(),
    };
}

function generateMockPosts(count) {
    return Array.from({ length: count }, generateMockPost);
}

const mockPosts = generateMockPosts(10);

function CommunityPage() {
    return (
        <div id="CommunityPage" className="page">
            {/* TODO: SOrtera i tid + pinned */}
            {mockPosts.map((postData, index) => (<Post key={index} post={postData} />))}
        </div>
    );
}

export default CommunityPage;
