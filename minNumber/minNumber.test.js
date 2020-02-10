// A 배열 들어옴  
// B 배열 들어옴  

// answer 배열들을 값을 곱해서 누적값을 구해서 비교한다.

const minNumber = (a,b) => {
    a.sort(function(a, b) { 
        return a - b;

    });
    b.sort(function(a, b) { 
        return b - a;
    });
    
    let array = Array(a.length).fill().map((v,i) => v = a[i]*b[i]).reduce((a, b) => a + b, 0)
    
    return array;
}

//     let count = 0;
//     while(a.length>count)
// {
//     array[count] = a[count] *b[count];
//     count++;
// }


// array = array.reduce((a, b) => a + b, 0)
// 5 4 4
// 20 16 8
// 10 8 8

test('minNumber', () => {
    expect(minNumber([1,4,2],[5,4,4])).toBe(29);
    expect(minNumber([1,2],[3,4])).toBe(10);

})