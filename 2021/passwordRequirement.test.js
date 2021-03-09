const solution = (inp_str) => {

  const answer = [];
  const pwdLength = inp_str.length;
  checkFirstRequirement(pwdLength, answer);
  checkSecondRequirement(inp_str, answer);
  checkThirdRequirement(inp_str, answer);
  checkFourthAndFifthRequirement(inp_str, answer);

  const finalAnswer = [...new Set(answer)];
  return finalAnswer[0] ? finalAnswer : [0];
}

const checkFirstRequirement = (pwdLength, answer) => {
  if(pwdLength >=15 || pwdLength <= 8) {
    answer.push(1);
  }
}

const checkSecondRequirement = (inp_str, answer) => {
  const regexr = /[^a-z0-9A-Z~!@#$%^&*]/ig

  if(regexr.test(inp_str)) {
    answer.push(2);
  }
};

const checkThirdRequirement = (inp_str, answer) => {
  const regexrCapitalLetter = /[A-Z]/
  const regexrLowerCaseLetter = /[a-z]/
  const regexrNumberLetter = /[0-9]/
  const specialLetter = /[~!@#$%^&*]/
  let count = 0;

  if(regexrCapitalLetter.test(inp_str)) {
    count += 1;
  }

  if(regexrLowerCaseLetter.test(inp_str)) {
    count += 1;
  }
  if(regexrNumberLetter.test(inp_str)) {
    count += 1;
  }
  if(specialLetter.test(inp_str)) {
    count += 1;
  }

  if(count < 3) {
    answer.push(3);
  }
};

const checkFourthAndFifthRequirement = (inp_str, answer) => {
  const newString = inp_str.split('').sort().join('');
  
  let prevLetter = '';
  let continuousCount = 0;
  for(let i = 0; i < newString.length; i ++) {
    if(prevLetter === newString[i]) {
      continuousCount += 1;
      if(continuousCount === 4) {
        answer.push(4);
      }
      if(continuousCount === 5) {
        answer.push(5);
      }
    } else {
      continuousCount = 1;
      prevLetter = newString[i];
    }
  }
}



test('solution', () => {
  expect(solution("ela=@44+3")).toEqual([2]);
  expect(solution("eeeeEEEE)")).toEqual([2,3,4]);
  expect(solution("EaEbEcEdE111144E")).toEqual([1,4,5]);
});