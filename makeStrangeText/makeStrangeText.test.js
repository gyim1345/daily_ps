const solution = (s) => {
    return s.split(/(\.*)?([a-zA-Z]+)(\.*)?/gi).filter(e=>e).map(word=> !word.includes(" ") ? word.split("").map((letter,index) => { if(index % 2 === 0) {
        return letter.toUpperCase();
    }
        return letter.toLowerCase();
    }).join("")  : word).join('')

    // return s.split(' ').map(x => x.split('').map((y,i)=> i%2===0 ? y.toUpperCase(): y.toLowerCase()).join('')).join(' ')
}



test('solution', () => {
    expect(solution("try hello world")).toBe("TrY HeLlO WoRlD");
});