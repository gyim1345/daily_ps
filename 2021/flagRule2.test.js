const solution = (program, flag_rules, commands) => {
 
  const answer = new Array(commands.length).fill(true);
  const objectFlagRules = getObjectFlagRules(flag_rules);
  
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
      if(flagHistory[inputFlagName]) {
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

const getObjectFlagRules = (givenFlagRules) => {
  const flagRules = {};
  givenFlagRules.forEach(rule => {
    const [flagName, flagArgument] = rule.split(' ');
    flagRules[flagName] = flagArgument;
  })
  return flagRules;
} 

test('solution', () => {
  expect(solution("google", ["-a STRINGS", "-d NUMBERS", "-w NULL"], ["google -d 100 102 -a hi -w", "google -d id pwd -d 100"]	)).toEqual([true, false]);
  expect(solution("shopping", ["-money NUMBERS", "-location STRING"], ["shopping -money 15 10 -location NewYork Paris", "shopping -money 10 -location NewYork"])).toEqual([false, true]);
});