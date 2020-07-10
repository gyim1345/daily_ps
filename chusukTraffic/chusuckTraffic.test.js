function solution(lines) {
    
    let newLines = lines.map(line =>line.replace("2016-09-15 ", ""))
    
    let newLinesArray = newLines.map(x=> x.split(/(.*):(.*):(.*) (.*)/).filter(x=> x))

    let newLinesSeconds = newLinesArray.map(x=> x.reduce((acc,cur)=>  {
        if(cur.includes('s')) {
            return [(acc +0.001 - Number(cur.replace("s", "")).toFixed(4)), acc];
        }
        if(cur.match(/(.*)\./)) {
            return acc + Number(cur);
        }
        return (acc + Number(cur))*60
            
    },0))

    newLinesSeconds.sort((a,b) => a[0]-b[0]);
    
    let max = 0;
    
    newLinesSeconds.forEach( x=> {
        let rangeStart = x[1]
        let rangeEnd = x[1] + 1;
        let tempMax = 0;
        
        newLinesSeconds.forEach( x=> {
           if(x[0] >= rangeStart && x[0] <rangeEnd) {
               tempMax += 1;
               return;
           } 
           if(x[1] >= rangeStart && x[1] <rangeEnd) {
               
               tempMax += 1;
               return;
           } 
            if(x[0]< rangeEnd && rangeEnd < x[1]){
                tempMax += 1;
            }
            
        })
             
        if(tempMax > max) {
            max = tempMax;
        }
    })
    
    return max;
}

test('solution', () => {
    expect(solution(["2016-09-15 20:59:57.421 0.351s", "2016-09-15 20:59:58.233 1.181s", "2016-09-15 20:59:58.299 0.8s", "2016-09-15 20:59:58.688 1.041s", "2016-09-15 20:59:59.591 1.412s", "2016-09-15 21:00:00.464 1.466s", "2016-09-15 21:00:00.741 1.581s", "2016-09-15 21:00:00.748 2.31s", "2016-09-15 21:00:00.966 0.381s", "2016-09-15 21:00:02.066 2.62s"])).toBe(7);
    // expect(solution(["2016-09-15 00:00:00.000 3s"])).toBe(1);
    // expect(solution([["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"]])).toBe(1);

});