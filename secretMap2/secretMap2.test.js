
// const secretMap = (n, arr1, arr2) =>
//     arr1.map((a,i)=>(a|arr2[i])
//         .toString(2)
//         .padStart(n,0)
//         .replace(/0/g,' ')
//         .replace(/1/g,'#'))
// //replace(/1|0/g, a => +a ? '#' : ' ')) 로 쓸 수 도 있다.
// test('secretMap', () => {
//     expect(secretMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####", "# # #", "### #", "#  ##", "#####"]);
// });

const secretMap = (input) => {
    let tags = input.split(' ')
    console.log(tags)
    return ["#sibal"];
}



test('secretMap', () => {
    expect(secretMap('#sibal #loma asdasdasd')).toEqual(["#sibal"]);
});

