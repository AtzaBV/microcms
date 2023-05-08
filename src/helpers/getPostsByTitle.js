import { posts } from '../data/posts';

export const getPostsByTitle = (title = '') => {
    title = title.toLocaleLowerCase().trim();
    if (title.length === 0) return [];
    
    return posts.filter(
        post => post.title.toLocaleLowerCase().includes(title)
    );
}