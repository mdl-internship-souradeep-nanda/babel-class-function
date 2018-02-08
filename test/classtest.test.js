import Linky from '../src/classtest';

describe('Class implementation of linkedlist', () => {
  it('should add nodes to the linked list', () => {
    const myLinky = new Linky();
    myLinky.add(1);
    myLinky.add(2);
    expect(myLinky.length()).toBe(2);
  });
  it('should have pop and peek methods', () => {
    const myLinky = new Linky();

    myLinky.add(1);
    myLinky.add(2);
    expect(myLinky.peek()).toBe(2);
    expect(myLinky.length()).toBe(2);

    myLinky.pop();
    expect(myLinky.peek()).toBe(1);
    expect(myLinky.length()).toBe(1);

    myLinky.pop();
    expect(myLinky.peek()).toBe(null);
    expect(myLinky.length()).toBe(0);
  });
});
