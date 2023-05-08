import { posts } from '../data/posts';

export const editPost = (post) => {
    if (!post?.title) throw new Error('Post title is required');
    if (!post?.content) throw new Error('Post content is required');
    if (!post?.rawContent) throw new Error('Post content is required');

    const {id, ...postContent} = post;
    const postIndex = posts.findIndex((p) => p.id === id);
    
    posts[postIndex] = {...posts[postIndex], ...postContent};

    localStorage.setItem('posts', JSON.stringify(posts));

    return {
        status: 'success',
        post: posts[postIndex]
    };
}