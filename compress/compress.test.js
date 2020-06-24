const solution = (msg) => {
    const answer = [];
    const hashTable = {};
    for (let i = 65; i <= 90; i += 1) {
        hashTable[String.fromCharCode(i)] = i - 64;
    }
    
    const charaters = msg.split("");
    let array = [charaters[0]];

    for (let i = 0; i < charaters.length; i += 1) {
        console.log(i, charaters[i], charaters)
        if (hashTable[array.join('')]) {
            array.push(msg[i+1]);
        } else {
            hashTable[array.join('')] = Object.keys(hashTable).length+1;
            array.pop();
            answer.push(hashTable[array.join('')]);
            array = [msg[i]];
            i -= 1;
        }
    }

    array.pop();
    answer.push(hashTable[array.join('')]);
    return answer;
}


test('solution', () => {
    expect(solution("KAKAO")).toEqual([11, 1, 27, 15]);
    expect(solution("TOBEORNOTTOBEORTOBEORNOT")).toEqual([20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]);
});