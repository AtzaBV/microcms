import { getAllPosts } from "../../src/helpers/getAllPosts";

describe('Tests on getAllPosts', () => { 
    test('should return an array', () => {
        const test = [];
        const result = getAllPosts();

        expect(JSON.stringify(result)).toEqual(JSON.stringify(test));
    })
});