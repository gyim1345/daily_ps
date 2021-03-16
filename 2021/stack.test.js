class Stack {
  constructor() {
    this.stack = [];
    this.length = 0;
  }

  push(value) {
    this.stack = [...this.stack, value];
    this.length += 1;
  }

  pop() {
    if(this.length !== 0) {
      const lastElement = this.stack[this.length -1];
      this.stack.splice(this.length - 1,1);
      this.length -= 1;
      return lastElement;
    }
  }

  values() {
    return this.stack;
  }
}

test('solution', () => {
  const stack = new Stack();
  expect(stack.values()).toEqual([]);


  stack.push('hi')
  expect(stack.values()).toEqual(['hi']);

  stack.push('foo')
  stack.push('bar')
  expect(stack.pop()).toEqual('bar');
  expect(stack.values()).toEqual(['hi', 'foo']);
  expect(stack.length).toBe(2);

  stack.push('one');
  expect(stack.values()).toEqual(['hi', 'foo', 'one']);

  expect(stack.pop()).toEqual('one');
  expect(stack.pop()).toEqual('foo');
  expect(stack.pop()).toEqual('hi');
  expect(stack.pop()).toEqual(undefined);


});