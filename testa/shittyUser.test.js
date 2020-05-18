    function solution(user_id, banned_id) {
        const candidates = [];
        const answer = {};
        
        banned_id.forEach(ban => {
            const candidate = [];
            user_id.forEach((id, i) => {
                console.log(id,i)
                if (comp(ban, id)) candidate.push(i);
            });
            candidates.push(candidate);
        });


        function f(i = 0, selected = []) {
            if (!candidates[i]) {
                selected.sort();
                answer[selected.join('')] = true;
                return;
            }
            candidates[i].filter(e => !selected.includes(e)).forEach(e => {
                f(i + 1, selected.concat([e]));
            });
        }
        f();
        console.log(answer)
        return Object.keys(answer).length;
    }
    
    function comp(ban, id) {
        if (id.length !== ban.length) return false;
    
        for (let i = 0; i < ban.length; i++) {
            if (ban[i] === '*') continue;
            if (ban[i] !== id[i]) return false;
        }
        return true;
    }
    
//     const set = new Set([]);
//     console.log(set)
//     let arr = [];

//     for(let i = 0; i < banned_id.length; i ++){
//         arr[i] =[];
//     }
//     banned_id.forEach((banned, i) => {
//         let arraybanned = banned.split('');

//         user_id.forEach((user) => {
//             let userArray = user.split('');
//             if (userArray.length === arraybanned.length) {
                
//                 let count = 0;
//                 let matchedCount = 0;
                
//                 while (count !== userArray.length) {
//                     if (userArray[count] === arraybanned[count] || arraybanned[count] === '*') {
//                         matchedCount += 1;
//                     }
//                     count += 1;
//                 }
                
//                 if(matchedCount === userArray.length){
//                     arr[i].push(user);
//                 }

//             }

//         })
        
//     })
//     let newArr = arr.slice(1)
//     newArr.forEach(el=> {
//         arr = arr.filter(x=> !x.includes(el))
//     })
//     console.log(arr)
    
//     var answer = 0;
//     return 2;
// }


// const change = (user_id, banned_id) => {

//     user_id.forEach(user => {
//         user = user.split('')
//         console.log(user);
//     })

// }

// test('change', () => {
//     expect(change(["frodo"], ["fr*d*"])).toBe('fr*d*');

// })

test('solution', () => {
    expect(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])).toBe(2);
    expect(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])).toBe(2);


})