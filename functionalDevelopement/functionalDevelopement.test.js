// progress의 제일 앞에 것이 100 이 될때 까지 
// 각 progress를  speed의 index에 맞게 계속 더해준다. 
// 제일 앞에 것이 100이 되면 빼줌과 동시에 뒤에것이 
// 100이 되었는지 확인하고 100이 되었다면 빼준다. 
// 아니면 speed의 index에 맞게 더해준다.

const functionalDevelopement = (progresses, speeds) => {
    
    const result = [];
    while (progresses[0] !== undefined) {
        progresses = progresses.map((it, i) => it += speeds[i])
        let count = 0;
        while (progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            count += 1;
        }
        if (count !== 0) {
            result.push(count);
        }
    }
    return result
}
// const checkAndPush100 = () => {

//     return checkAndPush100( )
// }

test ( 'functionalDevelopement', () => {
    // expect(functionalDevelopement([93,30,55],[1,30,5])).toEqual([2,1])
    expect(functionalDevelopement([15, 1, 14, 9, 29, 25, 17, 24, 4, 27, 7, 19, 29, 14, 23, 4, 21, 3, 8, 14],[9, 11, 21, 16, 11, 21, 7, 5, 6, 30, 11, 24, 26, 18, 20, 18, 15, 30, 7, 18])).toEqual([6, 1, 13])
}) 