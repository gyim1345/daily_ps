// 명령어가 두개가 있으니 I 가 있으면 I 뒤에 나오는 
// 문자열을 넣어 주고 
// D가 나오고 - 가 없으면 최대값 삭제,
//  - 가 없으면 최솟값 삭제로 하면 될것 같다.

const doublePriorityQueue = (operations) => {

    const queue = [];

    operations.forEach(operation => {
        if (operation.includes('I')) {
            queue.push(Number(operation.replace(/I /, '')))
        } else if (operation.includes('D 1')) {
            queue.sort((a, b) => a - b).pop();
        } else if (operation.includes('D -1')) {
            queue.sort((a, b) => a - b).shift();
        }
    })

    if (queue[0]) {
        return [Math.max(...queue), Math.min(...queue)];
    } else return [0, 0]


}


test('doublePriorityQueue', () => {
    // expect(doublePriorityQueue(["I 16","D 1"])).toEqual([0,0])
    // expect(doublePriorityQueue(["I 7", "I 5","I -5", "D -1"])).toEqual([7,5])
    expect(doublePriorityQueue(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"])).toEqual([0, 0])

})