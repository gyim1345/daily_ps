// a: 월  
// b: 일  
// result: 요일  
// 2016 년도 는 윤년이다. 2016년도의 a인 월과 b인 일이 주어질때 그 날짜의 요일을 돌려주는 문제이다.

// 계획:  
// 1 31
// 2 29
// 3 31
// 4 30
// 5 31
// 6 30
// 7 31
// 8 31
// 9 30
// 10 31
// 11 30 
// 12 31

// 각각 시작 요일 수를 배정 해서 그에 따라 구하기??
const year2016= (a,b) => {
    let startDayOfTheWeek = 5;
    let day = [31,29,31,30,31,30,31,31,30,31,30,31]
    let dayOfTheWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    let date = day.splice(0, a-1).reduce((a,b) => a+b,0)+b
    let indexDayOfTheWeek = (date+startDayOfTheWeek-1)%7;
    return dayOfTheWeek[indexDayOfTheWeek]
}

test('year2016', () => {
    // expect(year2016(5,24)).toBe('TUE');
    // expect(year2016(1,24)).toBe('SUN');
    expect(year2016(12,31)).toBe('SAT');
}) 