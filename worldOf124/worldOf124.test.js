function solution(n) {
    let arr = [];
        const three = n.toString(3)
        let threeArr = three.split('');
        while(threeArr.length!==0){
        if(threeArr[threeArr.length-1] === '0') {
            arr.push(4);
            threeArr.pop();
            threeArr = threeArr.join('');
            threeArr = (parseInt(threeArr,3)-1).toString(3).split('');
        }else if(threeArr[threeArr.length-1] === '1') {
            arr.push(1);
            threeArr.pop();
        }else if(threeArr[threeArr.length-1] === '2') {
            arr.push(2);
            threeArr.pop();
        }
        if(threeArr.length ==1 && threeArr[0] === '0'){
            break;
        }
    }
        return arr.reverse().join('');
    }

test('solution' , () => {
    expect(solution(1)).toBe('1');
    expect(solution(2)).toBe('2');
    expect(solution(3)).toBe('4');
    expect(solution(4)).toBe('11');
    expect(solution(5)).toBe('12');
    expect(solution(6)).toBe('14');
    expect(solution(7)).toBe('21');
    expect(solution(8)).toBe('22');
    expect(solution(9)).toBe('24');
    expect(solution(10)).toBe('41');
    expect(solution(11)).toBe('42');
    expect(solution(12)).toBe('44');
    expect(solution(13)).toBe('111');
})