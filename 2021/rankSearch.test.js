const solution = (info, query) => {
  const languageSet = new Set();
  const positionSet = new Set();
  const workExperienceSet = new Set();
  const foodSet = new Set();

  info.forEach((el,i) => {
    const [language, position, workExperience, food] = el.split(' ');
    languageSet.add(language);
    positionSet.add(position);
    workExperienceSet.add(workExperience);
    foodSet.add(food);
  })

  const allCombinationObj = createObj(languageSet, positionSet, workExperienceSet, foodSet);
  
  
  for(let i = 0; i < info.length; i++) {
    const [language, position, workExperience, food, score] = info[i].split(' ');
    allCombinationObj[language][position][workExperience][food].push(+score);
  }

  sortObj(allCombinationObj, languageSet, positionSet, workExperienceSet, foodSet);

  const answers = query.map(requirements=> getCount(requirements, allCombinationObj, languageSet, positionSet, workExperienceSet, foodSet));

  return answers
}

const binarySearch = (arr, score) => {
  let min = 0;
  let max = arr.length;
  let mid;
  let answer = null;
  while(min <= max){
    mid = ~~((min + max) / 2);

    if(arr[mid] >= score) {
      answer = mid;
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return answer;
}

const countMatch = (possibleMatches, obj, index, score) => {
  if(index >= 4){
    if(!obj[0] || obj[obj.length-1] < score) {
      return 0;
    }
    
    const minIndex = binarySearch(obj, score);
    return obj.length - minIndex;
  }

  let count = 0;
  for(let i = 0; i < possibleMatches[index].length; i++){
    const key = possibleMatches[index][i];
    count += countMatch(possibleMatches, obj[key], index+1, score);
  }
  return count;
}

const getCount = (requirements, obj, languages, positions, workExperiences, foods) => {
  const [language, position, workExperience, food, score] = requirements.replace(/ and/g, '').split(' ');
  
  let possibleMatches = [];
  possibleMatches.push(selectOne(language, languages));
  possibleMatches.push(selectOne(position, positions));
  possibleMatches.push(selectOne(workExperience, workExperiences));
  possibleMatches.push(selectOne(food, foods));
  
  return countMatch(possibleMatches,obj, 0, +score);
}

const selectOne = (first, second) => {
  if(first === '-') {
    return [...second];
  }
  return [first]
}

const sortObj = (obj, languages, positions, workExperiences, foods) => {
  for(let language of languages){
    for(let position of positions){
      for(let workExperience of workExperiences){
        for(let food of foods){
          obj[language][position][workExperience][food].sort((num1, num2) => num1 - num2);
        }
      }
    }
  }
}

const createObj = (languages, positions, workExperiences, foods) => {

  const obj = {}

  languages.forEach(language => {
    if(!obj[language]) {
      obj[language] = {};
    }
    positions.forEach(position => {
      if(!obj[language][position]) {
        obj[language][position] = {};
      }
      workExperiences.forEach(workExperience => {
        if(!obj[language][position][workExperience]) {
          obj[language][position][workExperience] = {};
        }
        foods.forEach(food => {
          obj[language][position][workExperience][food] = [];
        })
      })
    })
  })
  // for(language of languages) {
  //   if(!obj[language]) {
  //     obj[language] = {};
  //   }
  //   for(position of positions) {
  //     if(!obj[language][position]) {
  //       obj[language][position] = {};
  //     }
  //     for(workExperience of workExperiences) {
  //       if(!obj[language][position][workExperience]) {
  //         obj[language][position][workExperience] = {};
  //       }
  //       for(food of foods) {
  //         obj[language][position][workExperience][food] = [];
  //       }
  //     }
  //   }
  // }
  return obj
}

// const solution = (info, query) => {
  //   const array = new Array(query.length).fill(0);
//   info.forEach(el => {
//     query.forEach((queryEl,i) => {
//       if(matching(el, queryEl)) {
//         array[i] ++;
//       }
//     })
//   })
//  return array
// }

// const matching = (given, target) => { 
//   const givenInfo = given.trim().split(' ');
//   const targetInfos = target.replace(/-/g,'any').match(/\b(?!and)\b\S+/g);
  
//   for(let i = 0; i < givenInfo.length; i ++) {
//     if(Number(givenInfo[i]) && Number(givenInfo[i]) >= Number(targetInfos[i])) {
//       return true;
//     }
//     if((givenInfo[i] !== targetInfos[i] && targetInfos[i] !== 'any')) {
//       return false;
//     }
//   }
//   return true
// }


// const solution = (info, query) => {

    //  const re = new RegExp( `-?\\d\+${operator}-?\\d\+`, "i" )
    // let found = expression.match(re);


//   const applicants = info.map(x=> x.replace(/ and|-| -/g, '').match(/(\D+)|\d+/g));
//   const classificationList = query.map(x=> {
//     return x.replace(/ and|-| -/g, '').match(/(\D+)|\d+/g);
//   });
//   // console.log(classificationList)
//   const array = new Array(classificationList.length).fill(applicants.length);
//   applicants.forEach(applicant => {
//     classificationList.forEach((list, i) => {
//       // console.log(list, applicant);
//       const stringMatch = applicant[0].match(list[0])
//       // console.log(stringMatch ,"match ");
//       let numberMatch = false;
//       if(Number(applicant[1]) >= Number(list[1])) {
//         console.log(applicant[1], list[1], Number(applicant[1]) >= Number(list[1]))
//         numberMatch = true;
//       }
//       if(!(stringMatch && numberMatch)) {
//         array[i] -= 1;
//       }
//     })
//   })
//   return 1;
// }


test('matching', () => {
  expect(matching("java backend junior pizza 150", "java and backend and junior and pizza 200")).toBe(false);


  expect(matching(
    'cpp backend senior pizza 260',
    "cpp and - and senior and pizza 250", 
   )).toBe(true);

   expect(matching(
    ' java backend junior pizza 150',
    "- and backend and senior and - 150", 
   )).toBe(false);

});

test.only('solution', () => {
  expect(solution(
    ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"], 
    ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"])).toEqual([1,1,1,1,2,4]);
});