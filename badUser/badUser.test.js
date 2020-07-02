function solution(user_id, banned_id) {
    const combinations = combine(user_id, banned_id.length);
    const possibleCombinations = match(combinations, banned_id);
    return possibleCombinations.length;
}

const match = (possibleMatch, banned_id) => {
    let modifiedBanned_id = banned_id.map(x=> x.replace(/\*/g, "."));
    possibleMatch = possibleMatch.filter(combination => arrayMatch(combination, modifiedBanned_id));
    return possibleMatch;
}

const arrayMatch = (combination, modifiedBanned_id) => {
    let isMatch = true;
    for(let i = 0; i < combination.length; i += 1) {
        if(!combination[i].match(`^${modifiedBanned_id[i]}$`)){
            isMatch = false;
            break;
        }   
    }
    if(!isMatch) {
        const permutation = perm(combination)
        return matchAtLeastOne(permutation, modifiedBanned_id)
    }

    return isMatch
}

const matchAtLeastOne = (combinations, regex) => {
    return combinations.some(x=> x.every((y,i) => y.match(`^${regex[i]}$`)));
}

function combine(items, numSubItems) {
    let result = [];
    let indexes = new Array(numSubItems);
    for (let i = 0; i < numSubItems; i++) {
        indexes[i] = i;
    }
    while (indexes[0] < (items.length - numSubItems + 1)) {
        let v = [];
        for (let i = 0; i < numSubItems; i++) {
            v.push(items[indexes[i]]);
        }
        result.push(v);
        indexes[numSubItems - 1]++;
        let l = numSubItems - 1; 
        while ((indexes[numSubItems - 1] >= items.length) && (indexes[0] < items.length - numSubItems + 1)) {
            l--; 
            indexes[l]++;
            for (let i = l + 1; i < numSubItems; i++) {
                indexes[i] = indexes[l] + (i - l);
            }
        }
    }
    return result;
}

function perm(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }
  


test('arrayMatch', () => {
    expect(arrayMatch([ 'frodo', 'fradi' ],["fr.d.", "abc1.."] )).toBe(false);
    expect(arrayMatch([ 'frodo', 'abc123' ],["fr.d.", "abc1.."] )).toBe(true);
    expect(arrayMatch([ 'frodo', 'fradi', 'abc123', 'frodoc' ]
    ,["fr.d.", ".rodo", "......", "......"] )).toBe(true);
})

test('match', () => {
    expect(match([
        [ 'frodo', 'fradi' ],
        [ 'frodo', 'crodo' ],
        [ 'frodo', 'abc123' ],
        [ 'frodo', 'frodoc' ],
        [ 'fradi', 'crodo' ],
        [ 'fradi', 'abc123' ],
        [ 'fradi', 'frodoc' ],
        [ 'crodo', 'abc123' ],
        [ 'crodo', 'frodoc' ],
        [ 'abc123', 'frodoc' ]
      ], ["fr*d*", "abc1**"])).toEqual([[ 'frodo', 'abc123' ],[ 'fradi', 'abc123' ]]);
});

test('solution', () => {
    expect(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])).toBe(2);
    expect(solution(	["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])).toBe(3);
});