const tuple = (s) => {
    let answer = [];
    s=s.replace(/{/,'');
    s= s.substring(0, s.length-1)
    // s= s.replace(/{|}/g, '')
    s=s.split('},')
    s=s.map(x=> x.replace(/}|{/g,''))
    s=s.map(x=> x.split(','))
    console.log(s)
    s.sort((a,b)=> a.length-b.length)
    console.log(s)
    s.forEach(numbers=> {
       numbers= numbers.filter(number => !answer.includes(number))
        answer.push(numbers[0]);
    })
    answer = answer.map(x=> Number(x));
    return answer
}

test('tuple', () => {
expect(tuple("{{2},{2,1},{2,1,3},{2,1,3,4}}")).toEqual([2, 1, 3, 4])
})