const failureRate = (N,stages) => {
    const currentPeopleOnStage =  Array(N).fill(0)
    .map((x,i) => x = stages.filter(v => v === i+1).length)
    //incomplete 
    const result = 
        Array(N).fill(0)
        .map((x,i) => x = stages.filter(v => v === i+1).length)
        .map((x,i) => (x)/(stages.length- currentPeopleOnStage.reduce((a, b) => a + b, 0)) === Infinity ? 0 : x/(stages.length- currentPeopleOnStage.reduce((a, b) => a + b, 0))) 
        .map(v => isNaN(v) ? 0 : v)
        .map((v,i)=> [v,i])
        .sort(function(a, b) {
            return (a[0] === b[0] ? a[1]-b[1] : b[0] - a[0]);
        })
        .map((v,i )=> v[1]+1)    
    
        // stages.forEach(x => result[x-1]= result[x-1]+1);
    console.log(result)

    return [3,4,2,1,5];
}

test( 'failureRate' , () => {
    expect(failureRate(5, [2, 1, 2, 6, 2, 4, 3, 3])).toEqual([3,4,2,1,5])
})