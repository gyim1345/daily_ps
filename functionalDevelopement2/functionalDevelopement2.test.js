// 룹을 돌려서 progresses의 값들을 speed에 값에 맞춰서 한번 돌때 
// 마다 그만큼 더해준다. 
// 더해주기 전에 1번째가 100이면 다른 곳에 저장을 하고 뒤에가 
// 100인지 확인을 한다. 100이면 그것도 저장해서 그 배열의 값을 
// 따로 또 저장한다. progress가 비을때 까지 한다.

const functionalDevelopment = (progresses, speeds) =>{
    const publishedLength = [];
    while(progresses[0] !== undefined) {
        const completed = [];

        while(progresses[0] >=100) {
            completed.push(progresses.shift());
            speeds.shift();
        }
        progresses = progresses.map( (progress,i) => progress+ speeds[i])
        if(completed.length !== 0) {
        publishedLength.push(completed.length);   
        }     
        }

    return publishedLength;
}


test('functionalDevelopment2', () => {
    expect(functionalDevelopment([93,30,55],[1,30,5])).toEqual([2,1])
})

