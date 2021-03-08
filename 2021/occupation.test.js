const solution = (table, languages, preference) => {

  const Occupation = ["AI", "INFO", "SOFTWARE", "WEB", "3D"];

  const newTable = table.map((x=>  {
    const [type, five, four, three, two, one] = x.split(' ');
    return { [five]: 5, [four]: 4, [three]: 3, [two]: 2, [one]: 1, type: type}
  }))

  const tableObj = {};
  newTable.forEach(x => {
    tableObj[x.type] = x;
  })

  const preferenceLanguages =  {};
  preference.forEach((x,i)=> {
    preferenceLanguages[languages[i]] = x;
  })
  
  const TotalScoreSum = [];
  Occupation.forEach(type=> {
    let score = 0;
    languages.forEach(language=> {
      const first = (tableObj[type][language]) || 0;
      const second = preferenceLanguages[language];
      const add =  first * second;
      score += add;
    })
    TotalScoreSum.push([score, type]);
  })

  TotalScoreSum.sort((a,b) => {
    const scoreA = a[0];
    const scoreB = b[0];

    if(scoreA === scoreB) {
      return a[1].localeCompare(b[1]);
    }
    return scoreB- scoreA;
  })
  return TotalScoreSum[0][1];
}


test('solution', () => {
  expect(solution(["AI JAVA JAVASCRIPT SOFTWARE PYTHON C#", "INFO JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "WEB JAVA JAVASCRIPT PYTHON KOTLIN PHP", "3D C++ C# JAVASCRIPT C JAVA"], ["JAVA", "JAVASCRIPT"], [7, 5])).toBe("WEB");


  expect(solution(["AI JAVA JAVASCRIPT SOFTWARE PYTHON C#", "INFO JAVASCRIPT JAVA PYTHON SQL C++", "HARDWARE C C++ PYTHON JAVA JAVASCRIPT", "WEB JAVA JAVASCRIPT PYTHON KOTLIN PHP", "3D C++ C# JAVASCRIPT C JAVA"], ["PYTHON", "C++", "SQL"], [7, 5, 5])).toBe("HARDWARE");
});