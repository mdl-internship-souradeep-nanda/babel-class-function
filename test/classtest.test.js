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
  it('should merge two lists', () => {
    const myLinky1 = new Linky();
    const myLinky2 = new Linky();
    myLinky1.add(1);
    myLinky1.add(2);
    myLinky2.add(3);
    myLinky2.add(4);
    myLinky1.join(myLinky2);
    expect(myLinky1.length()).toBe(4);
    expect(myLinky2.length()).toBe(4);

    expect(myLinky1.peek()).toBe(4);
    myLinky1.pop();
    expect(myLinky1.peek()).toBe(3);
    myLinky1.pop();
    expect(myLinky1.peek()).toBe(2);
    myLinky1.pop();
    expect(myLinky1.peek()).toBe(1);
    myLinky1.pop();
    expect(myLinky1.peek()).toBe(null);
    myLinky1.pop();

    expect(myLinky2.peek()).toBe(4);
    myLinky2.pop();
    expect(myLinky2.peek()).toBe(3);
    myLinky2.pop();
    expect(myLinky2.peek()).toBe(2);
    myLinky2.pop();
    expect(myLinky2.peek()).toBe(1);
    myLinky2.pop();
    expect(myLinky2.peek()).toBe(null);
    myLinky2.pop();
  });
});
