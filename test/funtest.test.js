const Linky = require('../src/funtest');

describe('Function implementation of linked list', () => {
  it('should add nodes to the linked list', () => {
    const myLinky = new Linky();
    myLinky.add(1);
    myLinky.add(2);
    expect(myLinky.length()).toBe(2);
  });
  it('should traverse nodes in a linked list');
});
