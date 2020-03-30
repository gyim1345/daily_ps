// 이해:

// arr: 주어진 숫자들이 들어 있는 배열

// return: 중복값이 제거된 배열.

// 계획:

// 새로운 배열을 만들어서 while 을 돌려서 그 해당 
// 배열에 안에 안있을 경우에만 값을 새로운 배열에 담는다.


const duplicateNumber = (arr) => {
    const newArr =[arr[0]]; 
    let count = 1;
    while(count<arr.length) {
        if(arr[count-1] !== arr[count]){
            newArr.push(arr[count]);
        }
        count += 1;
    }
    return newArr;
}

test('duplicateNumber', () => {
    expect(duplicateNumber([1,1,3,3,0,1,1])).toEqual([1,3,0,1])
})