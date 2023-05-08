import { posts } from '../data/posts';

export const getPostsById = (id) => {
    if (!id) return null;
    return posts.find(post => post.id === id);
}