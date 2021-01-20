function solution(number1,number2) {

  const totalLength = number1[0];

  let numbers = new Array(totalLength).fill(0).map((_,i) => i+1 );
  console.log(numbers)
  let moves = 0;
  number2.forEach(number => {
    let index = 0;
    if(numbers[index] === number) {
      numbers.shift();
      return;
    }
    console.log(numbers)
    const targetIndex = numbers.indexOf(number);
    const difference = targetIndex - index;
    
    if(difference <= numbers.length/2) {
      temp = numbers.splice(0,difference)
      numbers = [...numbers, ...temp];
      moves += difference;
      numbers.shift();
      return;
    }

    temp = numbers.splice(targetIndex)
    numbers = [ ...temp, ...numbers];
    numbers.shift();
    moves += temp.length;
  })
  return moves;
}


test('solution', () => {
  expect(solution([10,3], [1,2,3])).toBe(0);
  expect(solution([10,3], [2,9,5])).toBe(8);
  expect(solution([32,6], [27,16,30,11,6,23])).toBe(59);
  expect(solution([10,10], [1,6,3,2,7,9,8,4,10,5])).toBe(14);
});

// https://www.acmicpc.net/problem/1021