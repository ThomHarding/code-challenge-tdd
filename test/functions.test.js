// IMPORT MODULES under test here:
import { 
    addExclamationPoints, divideThenMultiply, getLastItem, getRandomNumber, getSecondItem, makeLuckyGreeting, multiplyBy12ThenHalve, multiplyBySeven, returnAsAnArray, returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test('exclamationBasicTest', (expect) => {
    const expected = 'nice!!!';

    const actual = addExclamationPoints('nice');

    expect.equal(actual, expected);
});

test('exclamationEmptyString', (expect) => {
    const expected = '!!!';

    const actual = addExclamationPoints('');

    expect.equal(actual, expected);
});

test('exclamationWrongType', (expect) => {
    const expected = '45.2!!!';

    const actual = addExclamationPoints([45.2]);

    expect.equal(actual, expected);
});

test('multiplyBySevenBasic', (expect) => {
    const expected = 56;

    const actual = multiplyBySeven(8);

    expect.equal(actual, expected);
});

test('multiplyByTwelveHalveBasic', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected);
});

test('divideThenMultiplyBasic', (expect) => {
    const expected = 12;

    const actual = divideThenMultiply(6, 2, 4);

    expect.equal(actual, expected);
});

/*test('divideThenMultiplyTooFewArguments', (expect) => {
    const expected = '';

    const actual = divideThenMultiply(4, 2);

    expect.equal(actual, expected);
});*/

test('returnAsAnArrayBasic', (expect) => {
    const expected = [8, 4, 5];

    const actual = returnAsAnArray(8, 4, 5);

    expect.equal(actual, expected);
});

test('returnAsAStringBasic', (expect) => {
    const expected = 2813;

    const actual = returnAsAString(2, 8, 13);

    expect.equal(actual, expected);
});

test('makeLuckyGreetingBasic', (expect) => {
    const expected = 'Hello! Your lucky number for the day is 12.';

    const actual = makeLuckyGreeting(12);

    expect.equal(actual, expected);
});

test('getSecondItemBasic', (expect) => {
    const expected = 'apple';

    const actual = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

test('getLastItemBasic', (expect) => {
    const expected = 'plum';

    const actual = getLastItem(['kiwi', 'apple', 'orange', 'plum']);

    expect.equal(actual, expected);
});

test('getRandomNumberBasic', (expect) => {  
    expect(0 >= getRandomNumber() >= 5);
});