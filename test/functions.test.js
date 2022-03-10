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

test('multiplyByTwelveHalveBasic', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, 'input multiplied by twelve then halved');
});

test('divideThenMultiplyBasic', (expect) => {
    const expected = 12;

    const actual = divideThenMultiply(6, 2, 4);

    expect.equal(actual, expected, 'first input divided by second and multiplied by third');
});

/*test('divideThenMultiplyTooFewArguments', (expect) => {
    const expected = '';

    const actual = divideThenMultiply(4, 2);

    expect.equal(actual, expected);
});*/

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