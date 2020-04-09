const camouflage = (clothes) => {
    let answer = 1;
    const obj = {};
    console.log(clothes)
    
    for(let arr of clothes) {
        console.log(arr)
        obj[arr[1]] = (obj[arr[1]] || 0) +1
        console.log(obj[arr[1]])
        console.log(obj['face'])
        console.log(obj.face)
    }

    //obj[arr]=obj[arr] 하면 arr에 따라 object로 만들어준다. 예를 들어서 [a,b,c,d,e,a,a,b,b] 가 잇다면
    // {a: undefined, b: undefined, c: undefined, d: undefined, e: undefined } 로 나오고 중복도 알아서 제거 해준다.
    // 여기서 obj[arr]=(obj[arr] || 0) +1 을 해주면 
    // obj 

    for(let key in obj) {
        answer *= (obj[key]+1);
    }

    return answer - 1;
}

test('camouflage', () => {
    // expect(camouflage([['yellow_hat', 'headgear'], ['blue_sunglasses', 'eyewear'], ['green_turban', 'headgear']])).toBe(5)
    // expect(camouflage([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face']])).toBe(3)
    // expect(camouflage([['crow_mask', 'face'], ['blue_sunglasses', 'face'], ['smoky_makeup', 'face'], ['asd', 'asd']])).toBe(7)
    expect(camouflage([['crow_mask', 'face'], ['blue_sunglasses', 'face2'], ['smoky_makeup', 'face'], ['asd', 'asd']])).toBe(11)

})