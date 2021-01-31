const solution = (input) => {

    const [n, m] = input.split(' ');
    
    let answer=1;
		for(let i = 1; i <= n; i++) {
      answer=answer*(m-i+1)/i;
    }
    
    return answer;
    
    // const larger = Math.max(n,m);
    // const smaller = Math.min(n,m);

    // let count = 0;
    // let dividend = 1;
    // let divisor = 1;
    // while(count < smaller) {
    //   dividend *= (larger - count); 
    //   divisor *= (count + 1);
      
    //   count += 1;
    // }
    // return dividend/divisor    
  }

test('solution', () => {
  expect(solution("2 2")).toBe(1);
  expect(solution("1 5")).toBe(5);
  expect(solution("13 29")).toBe(67863915);
});

