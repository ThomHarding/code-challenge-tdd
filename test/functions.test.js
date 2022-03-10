// IMPORT MODULES under test here:
import { 
    addExclamationPoints, divideThenMultiply, getLastItem, getRandomNumber, getSecondItem, makeLuckyGreeting, multiplyBy12ThenHalve, multiplyBySeven, returnAsAnArray, returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test('exclamationBasicTest', (expect) => {
    const expected = 'nice!!!';

    const actual = addExclamationPoints('nice');

    expect.equal(actual, expected, 'adds three exclamation points to a basic string');
});

test('exclamationEmptyString', (expect) => {
    const expected = '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected, 'a string consisting of three exclamation points');
});

test('exclamationWrongType', (expect) => {
    const expected = '45.2!!!';

    const actual = addExclamationPoints([45.2]);

    expect.equal(actual, expected, 'number converted to a string and exclamation points added');
});

test('multiplyBySevenBasic', (expect) => {
    const expected = 56;

    const actual = multiplyBySeven(8);

    expect.equal(actual, expected, 'input number multiplied by seven');
});

test('multiplyBySevenNegative', (expect) => {
    const expected = -56;

    const actual = multiplyBySeven(-8);

    expect.equal(actual, expected, 'input number multiplied by seven, but the input is negative this time');
});

test('multiplyBySevenWrongType', (expect) => {
    const actual = multiplyBySeven('eight');

    expect.throws(actual, 'throws an error as input is not a number type');
});

test('multiplyByTwelveHalveBasic', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 'input multiplied by twelve then halved');
});

test('multiplyByTwelveHalveNull', (expect) => {
    const expected = 0;

    const actual = multiplyBy12ThenHalve(null);

    expect.equal(actual, expected, 'returns 0 as null is considered to be 0');
});

test('multiplyByTwelveHalveDouble', (expect) => {
    const expected = 9;

    const actual = multiplyBy12ThenHalve(1.5);

    expect.equal(actual, expected, 'double input is multiplied by twelve then halved');
});

test('divideThenMultiplyBasic', (expect) => {
    const expected = 12;

    const actual = divideThenMultiply(6, 2, 4);

    expect.equal(actual, expected, 'first input divided by second and multiplied by third');
});

test('divideThenMultiplyByZero', (expect) => {
    const expected = Infinity;

    const actual = divideThenMultiply(6, 0, 4);

    expect.equal(actual, expected, 'Infinity due to dividing by zero');
});

test('divideThenMultiplyTooFewArguments', (expect) => {
    const actual = divideThenMultiply(4, 2);

    expect.throws(actual, 'throws an error as there are not three arguments passed');
});

test('divideThenMultiplyWrongType', (expect) => {
    const actual = divideThenMultiply('a', 'b', 'c');

    expect.throws(actual, 'throws an error due to the wrong type being passed');
});

test('returnAsAnArrayBasic', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, 'the three inputs made into an array of length 3');
});

test('returnAsAStringBasic', (expect) => {
    const expected = 2813;

    const actual = returnAsAString(2, 8, 13);

    expect.equal(actual, expected, 'returns all three inputs concatenated together into a string');
});

test('makeLuckyGreetingBasic', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected, 'returns inputs added together after flavour text string');
});

test('getSecondItemBasic', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected, 'returns the second item in the array');
});

test('getLastItemBasic', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected, 'returns the last item of the array');
});

test('getRandomNumberBasic', (expect) => {  
    expect.equal((1 <= getRandomNumber() <= 5), true, 'returns a random number between 1 and 5 inclusive');
});