
const secretMap = (n, arr1, arr2) =>
    arr1.map((a,i)=>(a|arr2[i])
        .toString(2)
        .padStart(n,0)
        .replace(/0/g,' ')
        .replace(/1/g,'#'))

test('secretMap', () => {
    expect(secretMap(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])).toEqual(["#####", "# # #", "### #", "#  ##", "#####"]);
});



