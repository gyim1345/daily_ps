const solution = (P) => {

    console.log(P.toString().split(''));
    let notFound = true;
    let PArray = P.toString().split('');
    console.log(new Set(PArray))
    console.log(new Set((P+1).toString().split('')))

    const a = new Set();
    a.add(1);
    console.log(a.size)
    let count = 1;
    while(notFound) {
            let happyYear = new Set((P+count).toString().split(''))

        if(happyYear.size === 4 ){
            break;
        }
        
        
        count += 1;
    }

    console.log(count+ P)
    return count+P
}


test('solution', () => {
    expect(solution(1987)).toBe(2013)
    })