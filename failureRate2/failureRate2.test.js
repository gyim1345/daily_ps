const failureRate = (N, stages) => {

  const currentPeopleOnStage = Array(N).fill(0)
      .map((x, i) => x = stages.filter(v => v === i + 1).length)

  const result =
    currentPeopleOnStage.map((x, i) => (x) / (stages.length - currentPeopleOnStage.slice(0, i).reduce((a, b) => a + b, 0)) === Infinity ? 0 : x / (stages.length - currentPeopleOnStage.slice(0, i).reduce((a, b) => a + b, 0)))
      //Infinity 처리 해줄 필요 없음. 지워도 됨.
      .map((v, i) => isNaN(v) ? [0, i] : [v, i])
      .sort(function (a, b) {
        return (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
      })
      .map(v => v[1] + 1)
    return result;
}

test('failureRate', () => {
    expect(failureRate(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3, 4, 2, 1, 5])
})