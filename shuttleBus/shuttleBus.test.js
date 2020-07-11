const solution = (n, t, m, timetable) => {
    let timeTable = timetable.map(v => convertHoursToMinutes(v));
    const busTimeTable = Array(n).fill(540).map((v, i) => v + i * t);
    console.log(busTimeTable);
    timeTable.sort((a,b) => a-b); 
    console.log(timeTable);

    const lastBus = busTimeTable[busTimeTable.length - 1];
    timeTable =  timeTable.filter(v => v <= lastBus);
    console.log(timeTable);
    
    for(let i = 0; i < busTimeTable.length-1; i += 1) {
        let count = m;
        
        while(busTimeTable[i]>= timeTable[0] && count > 0) {
            timeTable.shift();
            count -= 1;
        }
    }


    console.log(busTimeTable);
    console.log(timeTable, m);


    if(m>timeTable.length) {
        return convertMinutesToHours(busTimeTable[busTimeTable.length-1]);
    }
    return convertMinutesToHours(timeTable[m-1]-1);
}

const convertMinutesToHours = (time) => {
    let hours = parseInt(time/60).toString().padStart(2, '0');
    let minutes = (time%60).toString().padStart(2, '0');
    return hours + ":" + minutes;
}

const convertHoursToMinutes = (time) => {
    const timeArr = time.split(":");
    const hours = Number(timeArr[0]);
    const minuts = Number(timeArr[1]);

    return hours * 60 + minuts;
};

test('convertMinutesToHours', () => {
    expect(convertMinutesToHours(549)).toBe("09:09");
});

test('convertHoursToMinutes', () => {
    expect(convertHoursToMinutes("03:15")).toBe(195);
})

test('solution', () => {
    expect(solution(1,1,5,["08:00", "08:01", "08:02", "08:03"])).toBe("09:00");
    expect(solution(2,10,2,["09:10", "09:09", "08:00"])).toBe("09:09");
    expect(solution(1, 1, 1, ["23:59"])).toBe("09:00");
});