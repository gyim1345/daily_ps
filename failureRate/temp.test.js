// 이해:
// N 스테이지 수 
// stages: 현제 스테이지 위치를 나타내는 숫자 배열
// result: 스테이지 실패율 내림 차순
// 실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수

// 계획: 

// 스테이지별 실패율 배열을 만듬.

// 그 스테이지별 실패율 구하기

// 실패율 구한 후에 내림차순으로 정리하기.

const failureRate =(N, stages) => {
    stages.sort();
    console.log(stages)
    const stageArray = new Array(N);
    stageArray.fill(0,0,N)
    stages.forEach(x => stageArray[x-1]= stageArray[x-1]+1)
    const tempArray= stageArray.slice(0,N);
    let failureRateArray = tempArray.map((x,i) => (x)/(stages.length- tempArray.slice(0,i).reduce((a, b) => a + b, 0)) === Infinity ? 0 : x/(stages.length- tempArray.slice(0,i).reduce(reducer,0)) )
    failureRateArray = failureRateArray.map(v => isNaN(v) ? 0 : v)
    failureRateArray = failureRateArray.map((v,i)=> [v,i])
    failureRateArray.sort(function(a, b) {
        return (a[0] === b[0] ? a[1]-b[1] : b[0] - a[0]);
      });

    return failureRateArray.map((v,i )=> v[1]+1);
}

const failure = (N,stages) => {
    const stageArray = new Array(N);
    stageArray.fill(0,0,N)
    stages.forEach(x => stageArray[x-1]= stageArray[x-1]+1)
    const tempArray = stageArray.slice(0,N);
    failureRateArray = tempArray.map((x,i) => (x)/(stages.length- tempArray.slice(0,i).reduce(reducer,0)) === Infinity ? 0 : x/(stages.length- tempArray.slice(0,i).reduce(reducer,0)) )
    return failureRateArray = failureRateArray.map(v => isNaN(v) ? 0 : v)
}

test('temp', () => {
    // expect(failure(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3,4,2,1,5]);
    // expect(failure(6, [2,4,3,2,3,6,7,1])).toEqual([6,3,4,2,1,5]);
    expect(failure(6, [2,2,2,2,2])).toEqual([0,1,0,0,0])
})


test.only('temp', () => {
    // expect(failureRate(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3,4,2,1,5]);
    expect(failureRate(6, [2,4,3,2,3,6,7,1])).toEqual([6,3,4,2,1,5]);
    // expect(failureRate(6, [7,7,7,7,6])).toEqual([6,1,2,3,4,5])
})