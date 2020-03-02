// 처음에 정사각형 조건문을 건다.
// 브라운 + 레드를 루트를 씌워서 나머지가 0이면 정사각형이다. 고로 리턴은 루트 결과값을 배열에 두개를 담는다.
// 아니면 브라운 + 레드 한값을
// 브라운+레드의 약수를 구해서 

const carpet = (brown,red) =>{
    for (let y = 3; y <= (brown+red)/y; y++) {
        let x = (brown+red)/y;
        if( (x-2)*(y-2)=== red) {
            return [x,y];
        }
    }
}

test('carpet' , () => {
    expect(carpet(8,1)).toEqual([3,3])
    expect(carpet(10,2)).toEqual([4,3])
    expect(carpet(24,24)).toEqual([8,6])
    expect(carpet(14,6)).toEqual([5,4])
    expect(carpet(14,4)).toEqual([6,3])
    expect(carpet(12,4)).toEqual([4,4])
    expect(carpet(12,3)).toEqual([5,3])
    expect(carpet(20,7)).toEqual([9,3])
    expect(carpet(16,9)).toEqual([5,5])
    expect(carpet(20,16)).toEqual([6,6])
    expect(carpet(18,12)).toEqual([6,5])
})