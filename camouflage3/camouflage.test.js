// 배열을 돌려서 물품 하나마다1 해당 조합들을 구할수 있도록 하자.
// 단 종류고 중복되면 조합으로 안한다.


const camouflage = (clothes) => {
    let typeOfCloth = [];
    let clothes1 = [];
    clothes.forEach((cloth,i) => 
    {   if(!typeOfCloth[cloth[1]]){
        typeOfCloth[cloth[1]] =[];
        clothes1.push(cloth[1]);
        typeOfCloth[cloth[1]].push(cloth[0])
    }
    else typeOfCloth[cloth[1]].push(cloth[0]);  
    })
    let answer = clothes1.reduce((acc,cloth) => acc *(typeOfCloth[cloth].length+1),1)
    return answer -1;
}

test('camouflage', () => {
    expect(camouflage([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])).toBe(5);
    expect(camouflage([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])).toBe(3);
})