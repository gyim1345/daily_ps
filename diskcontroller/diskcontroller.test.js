// jobs를 sort를 해서 최소 길이들 부터 처리 할 수 있게끔 정렬을 한다.

// 그후에 map을 돌려서 적업 시간들을 알맞은 시작 시간으로 바꿔준다.
//  0 시작시점으로  바꾸고 끝나는 시점은 
//  이전 끝나는 시점 + 전배열의 끝자리수 -이전 시작시간.

// 각 작업의 길이들을 합해서 평균을 낸다.


const diskcontroller =(jobs) => {

    const queue = [];
    jobs.forEach(job=> {
        const array = new Array(job[0]+job[1]+1).fill(1,job[0])
        console.log(array)
    })


    // jobs.sort((a,b) => {
    //     return (a[1]-a[0])- (b[1]-b[0])
    // })
    
    // console.log(jobs)


    // const jobLength = jobs.map((x,i)=> {
    //     return x[1]
    // })
    //     const newJobs = jobs.map((x,i) => {
    //         if(jobs[i-1]){
    //                 let beforeLength =0;
    //                 let count =0;
    //                 while(count<i){
    //                     beforeLength += jobLength[count];
    //                     count += 1;
    //                 }
    //                  return [jobs[i][0], jobs[i][1]+beforeLength]
                        
    //                 }else {
    //                     const differece = jobs[i][0]
    //                     return [jobs[i][0], jobs[i][1]-differece];
    //                 }
    //     })

    // const length = newJobs.map((x,i)=> {
    //     return x[1]-x[0]
    // })

    // return length.reduce((a,b) => a+b)/length.length
    return;
}

test('diskcontroller', () => {
    expect(diskcontroller([[0, 3], [1, 9], [2, 6]])).toBe(9);
    // expect(diskcontroller([[0, 3], [4, 3], [10, 3]])).toBe(3);
    // expect(diskcontroller([[0, 10], [2, 3], [9, 3]])).toBe(9);
    // expect(diskcontroller([[1, 10], [3, 3], [10, 3]])).toBe(9);
    // expect(diskcontroller([[0, 10]])).toBe(10);
    // expect(diskcontroller([[0, 10], [4, 10], [5, 11], [15,2]])).toBe(15);


    
})