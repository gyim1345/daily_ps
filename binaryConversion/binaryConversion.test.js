function solution(s) {
    let string = s;
    let repeatCount = 0;
    let zeroCount = 0;
    
    while(string.length >1) {
      repeatCount += 1;
      const newLength = string.replace(/0/g, '').length;  
      zeroCount += string.length - newLength;
      string = newLength.toString(2);
    }
    
    return [repeatCount, zeroCount]
}


test((), => {
  expect(solution("110010101001")).toEqual([3,8]);
  expect(solution("01110"	)).toEqual([3,3]);
  expect(solution("1111111"	)).toEqual([4,1]);
  }
)
