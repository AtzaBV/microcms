import { getPostsById } from "../../src/helpers/getPostById";

describe('Test getPostById function', () => {
    test('should return null if id is not given', () => { 
        const result = getPostsById();
        expect(result).toBe(null);
    });
});