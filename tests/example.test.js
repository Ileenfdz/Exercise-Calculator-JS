import { sum } from "../src/components/Example";
import { multiply } from "../src/components/Example";
import { divide} from "../src/components/Example";

describe('Just an example test', () => {
    test('should be 4', () => {
        expect(sum(1,2)).toBe(3);
    });

    // test('should be 4', () => {
    //     expect(multiply(2,2)).toBe(4);
    // });

    // test('should be 1', () => {
    //     expect(divide(4,2)).toBe(2);
    // });
});