// 1. 들어오는거 값들을 ascii 코드로 바꿈. 단 공백이면 넘어간다.
// 2. 바꾼후 n 만큼 더한다.
// 3. 대문자 65~90(26) 까지 해당 되는것들이 n 만큼 더해져서 90을 넘음면 뒤로(65) 가서 나머지 만큼 더 해줌
// 4. 소문자 97~122(26) 까지 해당 되는것들이 n 만큼 더해져서 122를 넘으면 뒤로(97) 가서 나머지 만큼 더 해줌
// 5. ascii code 들을 다시 string 값으로 돌려줌.

function solution(n, lost, reserve) {
    var answer = 0;
    console.log(n)
    let array1 = [];
    let lost1 =  [ 2, 4 ]
    let reserve1= [1, 3, 5]
    console.log(lost1);
    console.log(reserve1);
    console.log(n.length)
    let j =0;
    let k =0; 
    for(let i =0; i<n; i++)
    {   console.log(i);
      
        array1[i]= 1;

        if( lost1[j] == i+1){
        array1[i] = array1[i]-1;
        j++;    
        }

        if(reserve1[k] == i+1){
            array1[i] = array1[i]+1;
            k++;
        }
        
    }
    console.log(array1)

  

    return 5;
}


test('solution()', () => {
    expect(solution(5 , [2, 4], [1,3,5] ) ).toBe(5)
})



// function solution(s, n){
//     let answer = [];
    
//     let sArray = s.split('');

//     for (let i = 0; i<sArray.length; i++)
//     {   
//         if(sArray[i].charCodeAt(0) == 32){
//             answer[i] = ' '
        
//         }
//         else 
//         if(s.charCodeAt(i)+n>122){
//         answer[i] = String.fromCharCode(s.charCodeAt(i)+n-26)
//         }
//         else
//         if(s.charCodeAt(i)+n>90 && s.charCodeAt(i)<91){
//          answer[i] = String.fromCharCode(s.charCodeAt(i)+n-26)
//         }
//         else
//         answer[i]= String.fromCharCode((s.charCodeAt(i))+n)
   
//     }

    
// return answer.join('');
// }