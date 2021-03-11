const solution = (program, flag_rules, commands) => {
 
  const answer = new Array(commands.length).fill(true);
  const objectFlagRules = getObjectFlagRules(flag_rules);
  const flagHistory = {};

  commands.forEach((command,index) => {
    const [inputCommand, inputFlagName, inputFlagArgument] = command.split(' ');

    // 세번째 조건 확인. 각 flag는 0번이나 1번 나타납니다.
    if(flagHistory[inputFlagName]) {
      answer[index] = false;
      return;
    }

    // 네번째 조건 확인. flag_rules에 존재하는 flag만 나타납니다.
    if(!objectFlagRules[inputFlagName]) {
      answer[index] = false;
      return;
    }

    // 첫번째 조건 확인. program으로 시작합니다.
    if(inputCommand !== program) {
      answer[index] = false;
      return;
    }

    // 두번쨰 조건 확인. 각 flag argument는 대응하는 flag의 flag_argument_type과 일치합니다.
    if(!isSameType(inputFlagArgument, objectFlagRules[inputFlagName])) {
      answer[index] = false;
      return;

    }


    //세전째 조건을 위한 히스토리.
    flagHistory[inputFlagName] = true;
  })


  return answer;
}

const checkStringNumberFormat = (string) => {
  if(isNaN(string)) {
    return 'string';
  }
  return 'number';
}

const isSameType = (target, typeInStringFormat) => {
  let targetType = checkStringNumberFormat(target); 
  
  if(targetType.toString().toUpperCase() === typeInStringFormat) {
    return true;
  }
  return false
}

const getObjectFlagRules = (givenFlagRules) => {
  const flagRules = {};
  givenFlagRules.forEach(rule => {
    const [flagName, flagArgument] = rule.split(' ');
    flagRules[flagName] = flagArgument;
  })
  return flagRules;
} 

test('solution', () => {
  expect(solution("google", ["-a STRING", "-d NUMBER", "-w NULL"], ["google -d 333 -a no -w", "gogle -a waa"])).toEqual([true, false]);
  expect(solution("google", ["-a STRING", "-d NUMBER", "-w NULL"], ["google -a 412 -d no", "google ss"])).toEqual([false, false]);
});