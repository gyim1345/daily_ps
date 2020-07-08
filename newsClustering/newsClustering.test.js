const solution = (str1, str2) => {

    const str1Pairs = getPairs(str1);
    const str2Pairs = getPairs(str2);

    const str1FilteredPairs = filterByGivenCondition(str1Pairs);
    const str2FilteredPairs = filterByGivenCondition(str2Pairs);

    const percentageMatch = getMatchPercentage(str1FilteredPairs, str2FilteredPairs);
    
    return  Math.floor(percentageMatch * 65536)
}

const getMatchPercentage = (s1, s2) => {
    if(!s1[0] && !s2[0]) {
        return 1;
    }
    
    if(!s1[0] || !s2[0]) {
        return 0;
    }

    let hashS1 = {};
    let hashS2 = {};
    s1.forEach(x => {
        hashS1[x] ? hashS1[x] += 1 : hashS1[x] =1;
    })
    s2.forEach(x => {
        hashS2[x] ? hashS2[x] += 1 : hashS2[x] =1;
    })
    
    let intersectionHash = {};
    let unionHash = {};
      Object.entries(hashS1).forEach( x=> {
        hashS2[x[0]] ? intersectionHash[x[0]] = Math.min(hashS2[x[0]], x[1]): '';
        unionHash[x[0]] = x[1];
    })
    
    Object.entries(hashS2).forEach( x=> {
        unionHash[x[0]] ? unionHash[x[0]] > x[1] ? "" : unionHash[x[0]] = x[1] : unionHash[x[0]]= x[1];
    })


    let intersectionCount = 0;
    Object.entries(intersectionHash).forEach( x=> {
        intersectionCount += x[1]
    })
    let UnionCount = 0;
    Object.entries(unionHash).forEach( x=> {
        UnionCount += x[1]
    })
 
    return intersectionCount/UnionCount
}

const filterByGivenCondition = (array) => {
    return array.filter(string => !!string.match(/^[a-zA-Z]+$/gi));
}

const getPairs = (string) => {
    const array = [];

    for(let i = 0; i < string.length-1; i += 1) {
        let a = string[i]+string[i+1];
        array.push(a.toLowerCase());
    }
    
    return array;
}


// test('getMatchPercentage', () => {
//     expect(getMatchPercentage([ 'fr', 'ra', 'an', 'nc', 'ce' ], [ 'fr', 're', 'en', 'nc', 'ch' ], 8)).toBe(0.25)
// })


// test('filter string and leave only letters', () => {
//     expect(filterByGivenCondition(["E=","=m","m*","*C","C^","^2"])).toEqual([]);
//     expect(filterByGivenCondition(["aa","a1","1+","+a","aa","a2"])).toEqual(["aa","aa"]);
//     expect(filterByGivenCondition(["sh", "ha", "ak", "ke", "e "])).toEqual(["sh", "ha", "ak", "ke"]);
//     expect(filterByGivenCondition(["sh", "ha", "ak", "ke", "e "])).toEqual(["sh", "ha", "ak", "ke"]);
//     expect(filterByGivenCondition(["e=", "=m", "m*", "*c", "c^", "^2"])).toEqual([]);
    
// })


// test('getPairs to return pairs of strings meeting the problems condition', () => {
//     expect(getPairs("france")).toEqual(["fr", "ra", "an", "nc", "ce"]);
//     expect(getPairs("shake ")).toEqual(["sh", "ha", "ak", "ke", "e "]);
//     expect(getPairs("E=M*C^2")).toEqual(["e=", "=m", "m*", "*c", "c^", "^2"]);
// })

test('solution', () => {
    expect(solution("FRANCE", "french")).toBe(16384);
    expect(solution("handshake", "shake hands")).toBe(65536);
    expect(solution("E=M*C^2", "e=m*c^2")).toBe(65536);
    expect(solution("aa1+aa2", "AAAA12")).toBe(43690);
    
});