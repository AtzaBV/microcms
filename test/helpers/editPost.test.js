import { editPost } from "../../src/helpers/editPost";

describe('Test editPost function', () => { 
    test('should throw an error if title is not given', () => { 
        expect(() => editPost()).toThrow(Error, 'Post title is required');
    });
    
    test('should throw an error if content is not given', () => { 
        expect(() => editPost({title: 'title'})).toThrow(Error, 'Post content is required');
    });

    test('should throw an error if content is not given', () => { 
        expect(() => editPost({title: 'title', content: 'content'})).toThrow(Error, 'Post content is required');
    });

    test('should return an object with status message', () => { 
       
    });
})