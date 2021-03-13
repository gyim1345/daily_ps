const solution = (program, flag_rules, commands) => {
  
  const answer = new Array(commands.length).fill(true);
  const alias = {};
  const objectFlagRules = getObjectFlagRules(flag_rules, alias);
  
  commands.forEach((command,index) => {
    const flagHistory = {};
    const currentLength = command.length;
    command = command.replace(program, '').trim();
    // 첫번째 조건 확인. program으로   시작합니다.
    if(currentLength === command.length) {
      answer[index] = false;
      return
    }

    const flags = command.match(/-([a-zA-Z])?([0-9a-zA-Z\s])+/g).map(flag=> flag.trim());

    flags.forEach(flag => {
       const inputFlagArgument = flag.split(' ');
       const inputFlagName = inputFlagArgument.shift();

      
      // 세번째 조건 확인. 각 flag는 0번이나  1번 나타납니다.
      if(flagHistory[inputFlagName] || flagHistory[alias[inputFlagName]]) {
        answer[index] = false;
        return;
      }

      // 네번째 조건 확인. flag_rules에  존재하는 flag만 나타납니다.
      if(!objectFlagRules[inputFlagName]) {
        answer[index] = false;
        return;
      }



      // 두번쨰 조건 확인. 각 flag   argument는 대응하는 flag의  flag_argument_type과 일치합니다.
      if(!isSameType(inputFlagArgument,  objectFlagRules[inputFlagName])) {
        answer[index] = false;
        return;
      }


      //세전째 조건을 위한 히스토리.
      flagHistory[inputFlagName] = true;
    })
  })

  return answer;
}

const checkStringNumberFormat = (string) => {
  if(isNaN(string)) {
    return 'string';
  }
  return 'number';
}

const isSameType = (targets, typeInStringFormat) => {
  let isSame = true;
  const targetLength = targets.length;
  targets.forEach(target => {
    let targetType = checkStringNumberFormat(target); 
    //복수일때 타입 확인
    if(targetLength > 1 && targetType.toString().toUpperCase()+ 'S' !== typeInStringFormat) {
      isSame = false;
      return;
    }

    //하나만 있을때 확인
    if(targetLength === 1 && targetType.toString().toUpperCase() !== typeInStringFormat) {
      //복수 타입일때 한개만 있어도 true이므로 조건문 추가.
      if(typeInStringFormat === "STRINGS" || typeInStringFormat === "NUMBERS") {
        isSame = !!typeInStringFormat.match(targetType.toUpperCase());
        return;
      };
      isSame = false;
    }
  })
  return isSame
}

const getObjectFlagRules = (givenFlagRules, alias) => {
  const flagRules = {};
  //flag rule 추가
  givenFlagRules.forEach(rule => {
    const [flagName, flagArgument] = rule.split(' ');
    flagRules[flagName] = flagArgument;
  })

  //alias 있을시 관계 제정립
  givenFlagRules.forEach(rule => {
    const [flagName, _, flagArgument2] = rule.split(' ');
    if(flagArgument2) {
      alias[flagName] = flagArgument2;
      alias[flagArgument2] = flagName;
      flagRules[flagName] = flagRules[flagArgument2];
    }  
  })

  return flagRules;
} 

test('solution', () => {
  expect(solution("google", ["-a STRING", "-ddd NUMBER", "-qqqqq NULL", "-n ALIAS -ddd"], ["google -n 234 -a hi -qqqqq", "google -n 234 -qqqqq -ddd 150"]	)).toEqual([true, false]);
  expect(solution(	"sleep", ["-location STRING", "-a ALIAS -range", "-range NUMBERS"], ["sleep -location qqq -range 5 8 -a 7", "sleep -location qqq -a what?"])).toEqual(	[false, false]);
});