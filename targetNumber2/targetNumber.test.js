
// DFS를 쓰자 재귀를 써서 돌려보자
//  그래서 배열의끝을 만나고 그 값이
//   target일때 어디 글로벌 함수 count 
//   같은 곳이 +1 해주자.


const targetNumber = (numbers, target) => {

    let count = 0;
    let index = -1;
    let sum = 0;
    const recursiveAdd = (numbers, target, sum,  index) => {
        if (numbers[index + 1]) {
            recursiveAdd(numbers, target, sum - numbers[index + 1],  index + 1)
            recursiveAdd(numbers, target, sum + numbers[index + 1],  index + 1)
        }
        if (numbers[index + 1] === undefined && sum === target) {
            
            return count += 1;
        }
    }

    recursiveAdd(numbers, target, sum - numbers[index + 1],  index + 1)
    recursiveAdd(numbers, target, sum + numbers[index + 1],  index + 1)
    return count
}


test('targetNumber', () => {
    expect(targetNumber([1, 1, 1, 1, 1], 3)).toBe(5);
})