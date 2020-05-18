// 먼저 스트라이크 많은 것 부터 확인함 확인해서 저장함

// 다음 것을 확인해서 저장함  비교해서 같은 자리에 같은게 
// 있으면 그것을 확정 시킴 

// 계속함...


const baseballNumber= (baseball) => {

    let allNumber = new Array(1000).fill(0);
    allNumber = allNumber.map((_,i) => i+1);
    allNumber = allNumber.filter(x=> x>100);
    allNumber = allNumber.filter(x=> !x.toString().includes('0'))
    allNumber = allNumber.filter(x=> new Set(x.toString().split('')).size === 3)
    

    baseball.forEach((ball,index) => {
        let arrball = ball[0].toString().split('')
        allNumber = allNumber.filter(number => {
            let numberarr = number.toString().split('');
                let count = 0;
             if(Number(arrball[0])=== Number(numberarr[0])){
                count += 1;
             }

             if(Number(arrball[1])=== Number(numberarr[1])){
                count += 1;
             }

             if(Number(arrball[2])=== Number(numberarr[2])){
                count += 1;
             }

             if(Number(count) === Number(ball[1])){
                 return true
             } else {
                return false};
                
    })
    })

    baseball.forEach(ball => {
        let arrball = ball[0].toString().split('')
        allNumber = allNumber.filter(number => {
            let numberarr = number.toString().split('');
            let count = 0;
         if(Number(arrball[0])=== Number(numberarr[1]) || Number(arrball[0])=== Number(numberarr[2])){
            count += 1;
         }

         if(Number(arrball[1])=== Number(numberarr[0]) || Number(arrball[1])=== Number(numberarr[2])){
            count += 1;
         }

         if(Number(arrball[2])=== Number(numberarr[1])|| Number(arrball[2])=== Number(numberarr[0])){
            count += 1;
         }

         if(Number(count) === Number(ball[2])){
             return true
         } else {
            return false};
            

    })})

    return allNumber.length
}

test('test', () => {
    expect(baseballNumber([[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]])).toBe(2);


})


    
    // baseball.sort((a,b) => b[1]-a[1]);

    // const hello = baseball[0][0].toString().split('');
    // let answer = new Array(3).fill(0);
    // //스트라이크
    // baseball.forEach(ball => {
    //     if(ball[1]>=1){
    //        const ballString = ball[0].toString().split('')
    //         for(let i = 0; i< 2; i++) {
    //             if(hello[i]===ballString[i]){
    //                 answer[i] = hello[i];
    //             }
    //         }
    //     }
    // })
    // //볼
    // // console.log(answer[2]=== undefined)
    // // answer = answer.map(x=> x === 0 ? new Array(9).fill(0): x)
    // answer = answer.map(x=>{ 
    //     if(x === 0){ 
    //         const numbers = new Array(10).fill(0)
    //         return numbers.map((_,i)=> i)
    //      }else return x
    //     })
    //     console.log(answer[0][1])

    // const baseballballs = baseball.filter(x=> x[2]>0);
    // console.log(baseballballs)
    //     answer.forEach(ans => {
    //     if(ans[1]!== undefined){
    //         baseballballs.forEach(x=> {
    //             y= x[0].toString().split('');
    //             console.log(y)
    //            ans= ans.filter(x=> y.includes(x));
    //             console.log(ans)
    //         })

    //        console.log(ans)
            
    //     }
    // })
    
    // // console.log(answer)
    // // console.log(baseball)

    

    // return 2;