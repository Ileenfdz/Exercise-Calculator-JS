import { sum } from "../components/Example";

describe('Just an example test', () => {
    test('1 + 1 should be 2', () => {
        expect(1+1).toBe(2);
    });

    test('should be 4', () => {
        expect(sum(2,2)).toBe(4);
    });
});