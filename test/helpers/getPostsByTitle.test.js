import { getPostsByTitle } from "../../src/helpers/getPostsByTitle";

describe('Test getPostsByTitle function', () => { 
    test('should return an array', () => {
        const test = []; 
        const result = getPostsByTitle();

        expect(JSON.stringify(result)).toEqual(JSON.stringify(test));
    });    
})