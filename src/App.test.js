import { todos, addTodo, eraseTodo, update } from './App';

// https://jestjs.io/docs/expect#expectvalue
// The expect function is used every time you want to test a value.

/*
  toBe compares two values for equality.
      https://jestjs.io/docs/expect#tobevalue
  toBeNull matches only null
      https://jestjs.io/docs/expect#tobenull
  toBeUndefined matches only undefined
      https://jestjs.io/docs/expect#tobeundefined
  toBeDefined is the opposite of toBeUndefined
      https://jestjs.io/docs/expect#tobedefined
  toBeTruthy matches anything that an if statement treats as true
      https://jestjs.io/docs/expect#tobetruthy
  toBeFalsy matches anything that an if statement treats as false
      https://jestjs.io/docs/expect#tobefalsy
*/


// test todos function
test('Outputs array of objects -exist, returns a value, and returns the correct value', () => {
  const expectOne = [
    { id: 1, text: 'wake up', isCompleted: false },
    { id: 2, text: 'take a shower', isCompleted: false },
    { id: 3, text: 'have breakfast', isCompleted: false },
    { id: 4, text: 'go to work', isCompleted: true }
  ];
  expect(todos()).toBeDefined();
  expect(todos()).toEqual(expectOne);
});


describe('arrayContaining', () => {
  const expectedTwo = [{ id: 5, text: 'exercise', isCompleted: false }];
  
  it('Adds object to array -exist, returns a value, and returns the correct value', () => {
    expect(addTodo('exercise', 5)).toEqual(expect.arrayContaining(expectedTwo));
    expect(addTodo('shopping', 5)).toBeDefined();
  });
});

describe('not.arrayContaining', () => {
  const expected = [{ id: 4, text: 'go to work', isCompleted: true }];

  it('Erases object from array -exist, returns a value, and returns the correct value', () => {
    expect(eraseTodo(4)).toEqual(expect.not.arrayContaining(expected),);
    expect(eraseTodo(4)).toBeDefined();
  });
});

// test update function
test('Updates and array of objects -exist, returns a value, and returns the correct value', () => {
  const arrObjTwo = [
    { id: 1, text: 'wake up', isCompleted: false },
    { id: 2, text: 'take a shower', isCompleted: false },
    { id: 3, text: 'have breakfast', isCompleted: false },
    { id: 4, text: 'go to work', isCompleted: true }
  ]
  expect(update(3, 'have breakfast')).toEqual(arrObjTwo);
  expect(update(3, 'have breakfast')).toBeDefined();
});
const {generateText } = require('./app');
test('should output name and age' , () => {
  const text = generateText('Max', 29);
  expect();
});
