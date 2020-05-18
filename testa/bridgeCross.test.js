// const binarySearch = (min, max, arr, k) => {
//     while (min <= max) {
//         const middle = parseInt((min + max) / 2);
//         let count = 0;
//         for (const el of arr) {
//             console.log(min, max, arr, k, el, middle)
//             if (el - middle <= 0) {
//                 count++;
//             } else {
//                 count = 0;
//             }
//             if (count >= k) break;
//         }

//         if (count >= k) {
//             max = middle - 1;
//         } else {
//             min = middle + 1;
//         }
//     }
//     return min ;
// };



const binarySearch = (min, max, stones, k) => {
    const middle = Math.floor((max+min)/2)
    if(min >= max){
        return min;
    }
    let count = 0;
    for(let i =0; i<stones.length; i++){
        
        if(stones[i]-middle <= 0){
            count +=1;
        }
        else {
            count = 0;
        }

        if(count >= k){
            break;
        }
    }

    if(count === k){
       return binarySearch(min, middle, stones, k)
    }else {
       return binarySearch(middle+1, max, stones, k)
    }
}

const solution = (stones, k) => {
    return binarySearch(0, 200000000, stones, k);
};



// const binarySearch = (min, max, stones, k) => {

//     while (min <= max) {
//         const middle = Math.floor((max + min) / 2)
//         let count = 0;
//         console.log(min,max,middle)
//         for (let i = 0; i < stones.length; i++) {

//             if (stones[i] - middle <= 0) {
//                 count += 1;
//             }
//             else {
//                 count = 0;
//             }
            
//             if(count >= k){
//                 break;
//             }

//         }
//         if (count >= k) {
//             max = middle - 1;
//         } else {
//             min = middle + 1;
//         }
//     }
//     return min

// }


// function solution(stones, k) {
//     let answer = 0;
//     let path = {};
//     let canPass = false;
    
//     for (let i = 0; i < stones.length; i++) {
//         path[i] = stones[i]
//     }
//     for (let i = 0; i < stones.length-1; i += 0) {
//         let pathCount = 0;
//         canPass = false;
//         while (pathCount < k) {
//             if (path[i + pathCount] !== 0 ) {
//                 path[i + pathCount] -= 1;
                
//                 canPass = true;
//                 break;
//             }
//             pathCount += 1;
//         }
//         console.log(path)
//         i = i + pathCount + 1;
//         if (!canPass) {
//             break;
//         }
//         if (i >= stones.length - k) {
//             answer += 1;
//             i = 0;
//         }
//     }
//     return answer;
// }

// for(let i = -1; i<stones.length; i+=0){

//     if(i >= stones.length-k){
//         answer += 1;
//         i=-1;
//         console.log(path)
//         continue;
//     }
//     let count =1;
//     let moved = true;
//     while(count <= 2){
//         console.log(count)
//         if(path[i+count]!==0) {
//             path[i+count] -= 1;
//             i += count;
//             break;
//         }
//         count++;
//     }





// if(path[i+1] !== 0){
//     path[i+1] -= 1;
//     i += 1;
// }else if(path[i+2] !==0){
//     path[i+2] -=1;
//     i += 2;
// }else if(path[i+3]!==0){
//     path[i+3] -=1;
//     i += 3;
// }else {break;}
// }


//     return answer;
// }

test('solution', () => {
    expect(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3)).toBe(3);
})