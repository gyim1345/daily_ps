// result를 담을 스테이지별 배율을 만듬.  
// 스테이지별 실패율을 계산  
// 스테이지별 실패율을 넣음  
// 스테이지별 넣은 실패율을 내림 차순으로 정렬.  
// 정렬하면서 실패율이 같다면 정렬을 스테이지 오름차순으로  

const sortedFailureRatebyStage = (N, stages) => {
    return Array(N).fill(0)
                    .map((_,i) => i+1)
                    .map(currentStage => ({stage: currentStage, failRate: failureRate(currentStage,stages)}))
                    .sort(function(a, b) {return a.failRate === b.failRate ? a.currentStage - b.currentStage : b.failRate - a.failRate})
                    .map(stageInfos => stageInfos.stage)
}

const failureRate = (currentStage, stages) => {
    return stages.filter(stageOfPerson =>stageOfPerson ===currentStage ).length/stages.filter(stageOfPerson => stageOfPerson>=currentStage).length
}

// test (test( 'failureRate ', () => {
//     expect(failureRate(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3,4,2,1,5])
// }))

test( 'failureRate ', () => {
    expect(sortedFailureRatebyStage(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3,4,2,1,5])
})