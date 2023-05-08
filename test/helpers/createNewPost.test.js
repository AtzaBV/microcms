import { createNewPost } from "../../src/helpers/createNewPost"

describe('Test on createNewPost Function', () => {
    test('should return an error if title is not given', () => { 
        expect(() => createNewPost()).toThrow(Error, 'Post title is required');
    });
    
    test('should return an error if content is not given', () => { 
        expect(() => createNewPost({title: 'title'})).toThrow(Error, 'Post content is required');
    });

    test('should return an error if content is not given', () => { 
        expect(() => createNewPost({title: 'title', content: 'content'})).toThrow(Error, 'Post content is required');
    });

    test('should return an object with a status', () => { 
        const post = {
            title: 'title',
            content: 'content',
            rawContent: 'rawContent'
        }

        const result = createNewPost(post);
        expect(result.status).toBe('success');
    });
})