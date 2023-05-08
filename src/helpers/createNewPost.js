import { posts } from '../data/posts';

export const createNewPost = (post) => {
    if (!post?.title) throw new Error('Post title is required');
    if (!post?.content) throw new Error('Post content is required');
    if (!post?.rawContent) throw new Error('Post content is required');

    const newId = new Date().getTime();
    const newPost = {...post, id: newId.toString()}

    posts.push(newPost);

    localStorage.setItem('posts', JSON.stringify(posts));

    // Return an array with the last post in the array, without modify the array itself.
    const [createdPost] = posts.slice(-1);
    return {
        status: 'success',
        post: createdPost
    };
}