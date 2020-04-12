function solution(arr, divisor) {
    let array = arr.filter(x => x % divisor === 0).sort((a,b) => a - b )
   return array[0] === undefined ? [-1] : array
}


test('solution', () => {
    expect(solution([5, 9, 7, 10],5)).toEqual(	[5, 10])

    expect(solution([3,2,6],10)).toEqual([-1])
})