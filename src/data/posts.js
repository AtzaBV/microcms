const savedPosts = JSON.parse(localStorage.getItem('posts'));

export const posts = savedPosts || [];