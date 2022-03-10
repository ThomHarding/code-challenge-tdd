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

test('multiplyBySevenZero', (expect) => {
    const expected = 0;

    const actual = multiplyBySeven(0);

    expect.equal(actual, expected, 'zero as anything times zero is zero');
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

test('divideThenMultiplyAlternate', (expect) => {
    const expected = 52;

    const actual = divideThenMultiply(14, 7, 26);

    expect.equal(actual, expected, 'first input divided by second and multiplied by third, but with different inputs');
});

test('returnAsAnArrayBasic', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, 'the three inputs made into an array of length 3');
});

test('returnAsAnArray2', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, 'the three inputs made into an array of length 3');
});

test('returnAsAnArray3', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.deepEqual(actual, expected, 'the three inputs made into an array of length 3');
});

test('returnAsAStringBasic', (expect) => {
    const expected = 2813;

    const actual = returnAsAString(2, 8, 13);

    expect.equal(actual, expected, 'returns all three inputs concatenated together into a string');
});

test('returnAsAString2', (expect) => {
    const expected = 2813;

    const actual = returnAsAString(2, 8, 13);

    expect.equal(actual, expected, 'returns all three inputs concatenated together into a string');
});

test('returnAsAString3', (expect) => {
    const expected = 2813;

    const actual = returnAsAString(2, 8, 13);

    expect.equal(actual, expected, 'returns all three inputs concatenated together into a string');
});

test('makeLuckyGreetingBasic', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(8, 4);

    expect.equal(actual, expected, 'returns inputs added together after flavour text string');
});

test('makeLuckyGreetingNegative', (expect) => {
    const expected = 'Hello! Your lucky number for the day is -753.';

    const actual = makeLuckyGreeting(-800, 47);

    expect.equal(actual, expected, 'returns inputs added together after flavour text string, but with negatives');
});

test('makeLuckyGreetingStrings', (expect) => {
    const expected = 'Hello! Your lucky number for the day is oh no not a string!.';

    const actual = makeLuckyGreeting('oh no', ' not a string!');

    expect.equal(actual, expected, 'adds strings together and adds to end of flavour text string');
});

test('getSecondItemBasic', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected, 'returns the second item in the array');
});

test('getSecondItemOneItemArray', (expect) => {
    const expected = undefined;

    const actual = getSecondItem(['apple']);

    expect.equal(actual, expected, 'undefined, as it attempts to access a blank index');
});

test('getSecondItemMoreBasicer', (expect) => {
    const expected = 'a most excellent hat';

    const actual = getSecondItem(['a suave pair of shoes', 'a most excellent hat', 'a most groovy coat of paint']);

    expect.equal(actual, expected, 'returns the second item in the array');
});

test('getLastItemBasic', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected, 'returns the last item of the array');
});

test('getLastItemOneItemArray', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['plum']);

    expect.equal(actual, expected, 'returns the last and only item of the array');
});

test('getLastItemEmptyArray', (expect) => {
    const expected = undefined;

    const actual = getLastItem([]);

    expect.equal(actual, expected, 'undefined as the array has no items to get the last one of');
});

test('getRandomNumberBasic', (expect) => {  
    expect.equal((1 <= getRandomNumber() <= 5), true, 'returns a random number between 1 and 5 inclusive');
});

test('getRandomNumberTypeOf', (expect) => {
    const returnType = typeof getRandomNumber();
    expect.equal(returnType, 'number', 'makes sure the function actually returns a Number object');
});

test('getRandomNumberAssertInteger', (expect) => {  
    expect.equal((getRandomNumber() % 1 === 0), true, 'checks that the number is an integer (aka number mod 1 is equal to 0)');
});