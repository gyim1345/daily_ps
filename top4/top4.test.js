// 맵을 돌려서 첫번째 요소 부터 확인해서 자기보다 오른쪽에 있는 수들이 더 크면 그 인덱스 값을 반환 아니면 0 반환

// const solution = (array) => {

//     // array.map((v,i) => (v< array.slice(0,i+1).filter(el =>v< el).lastIndexOf)

//     return [0,0,0,3,3,3,6]
// }

const solution1 = (array) => {
    return `${Math.min(...array.split(' '))} ${Math.max(...array.split(' '))}`





    // array.map((v,i) => (v< array.slice(0,i+1).filter(el =>v< el).lastIndexOf)
    // const newArray =  [...array];
    // console.log (newArray)
    // console.log (array)
    // array.map((v,i)=> v< )
    // return array.map((v,i) => array.slice(0,i+1).filter((el,i) =>  v< el )) 

    
}


test ('solution1' , () => {
    expect(solution1("-1 -2 -3 -4")).toBe("-4 -1");
})  

// test ('solution' , () => {
//     expect(solution([3,9,9,3,5,7,2])).toEqual([0,0,0,3,3,3,6]);
// })  