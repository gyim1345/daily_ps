const findPrintOrder = (priorities, location) =>
  step(priorities.map((v, i) => ({ location: i, priority: v, })), location, 1);

const step = (queue, target, order) =>{
    console.log(queue, target, order)

 return head(queue).priority === Math.max(...queue.map(v => v.priority)) // que 값의 앞의 priority가 que안에 있는 priority 중에서 가장 큰 값이라면
    ? head(queue).location === target ? order : step(tail(queue), target, order + 1) // que의 첫번째 값의 location 이 (문제에서 주어진 location) target location 이면 return order(count같은것)을 돌려줘라 아니면 step을 다시 돌리되 
    : step([...tail(queue), head(queue)], target, order); 

}

const head = xs => xs.slice(0, 1)[0];
const tail = xs => xs.slice(1);

test('findPrintOrder', () => {
//   expect(findPrintOrder([2, 1], 0)).toBe(1);
//   expect(findPrintOrder([2, 1], 1)).toBe(2);
  expect(findPrintOrder([2, 1, 3, 2], 2)).toBe(1);
//   expect(findPrintOrder([1, 1, 9, 1, 1, 1], 0)).toBe(5);
//   expect(findPrintOrder([6, 3, 16, 3, 5, 7], 3)).toBe(6);
});