import { posts } from '../data/posts';

// get all posts from the localstorage
// const posts = [];

export const getAllPosts = () => {
    if (posts.length === 0) return [];
    return posts;
}