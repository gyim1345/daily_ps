function solution(numbers) {
    let result = ""

    const arr = numbers.map(x => x.toString())
    console.log(arr)
    arr.sort((a,b) => {parseInt(b+a) - parseInt(a+b)})
    console.log(arr)

    if(arr[0] === "0") return "0"

    
    return arr.join('')
}


// function solution(numbers) {
//     const answer = numbers.map(num => String(num))
//                                .sort((a,b) => parseInt(b+a, 10) - parseInt(a+b, 10))
//                                .join('')
//     return parseInt(answer) ? answer : '0';
// }


test( 'maxMinNumber' , () => {
    expect(solution([6, 10, 2])).toBe("6210");
})