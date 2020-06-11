function wordTransformation(begin, target, words) {
 
    if(!words.includes(target)){
        return 0;
    }
    let current = begin;
    let counts = [];
    function bfs(count = 0, wordArray= words.slice() , currentWord = begin) {
        console.log(wordArray, count, currentWord, 'start')
        if(currentWord === target){
            counts.push(count);
            return;
        }
        // if(currentWord.split('').filter(letter => target.includes(letter)).length == currentWord.split('').length -1 ){
        //     counts.push(count+1);
        //     return;
        // }
        let queue = [];
        wordArray.forEach(word => {
            let letterSimilarity = 0;
            let currentWordArray = currentWord.split('');
            let wordArray = word.split('');
            if(wordArray.length === currentWordArray.length){
            currentWordArray.forEach((letter,i) => {
                if(letter === wordArray[i]){
                    letterSimilarity +=1;
                }
            })
            if(letterSimilarity === wordArray.length-1){
                queue.push(word);
            }
        }
            // if(currentWord.split('').filter(letter => word.includes(letter)).length == currentWord.split('').length -1 ){
            //     queue.push(word);
            // }
        })
        console.log(queue, count, 'queue')
        while(queue[0]){
            currentWord = queue.shift();
            console.log(currentWord, count, 'currentWord')
            console.log(wordArray.indexOf(currentWord)+1,  count)
            bfs(count+1, wordArray.slice(wordArray.indexOf(currentWord)+1), currentWord)
        }

        if(!wordArray[0] && !counts[0] && !queue[0]){
            bfs(count, words, currentWord);
        }

    }
    bfs();
    console.log(counts, 'aaaaaaaaaaaaaaaaaaaaaaaaa')

return Math.min(...counts);

}

//     let similarLength = begin.split('').length -1;
//     let count = 0;
//     let similarWords = [];
//     let similarityCount = 0;
//     let currentWord = begin.split('');
//     let targetWord = target.split('');
//     words.forEach(word => {

        
//        let targetSimilaritiesLength =  word.split('').filter(x=> targetWord.includes(x)).length 
//        let currentSimialritiesLength = word.split('').filter(x=> currentWord.includes(x)).length
       


//        if(targetSimilaritiesLength >= similarityCount && currentSimialritiesLength === similarLength && similarityCount !== similarLength) {
//         console.log(word, similarityCount)
//         count += 1;
//         similarityCount = targetSimilaritiesLength;
//         currentWord = word.split('');
//         }

//     })

//     return count += 1;
// }

test('wordTransformation', ()=> {
    expect(wordTransformation("hit", "cog",	["hot", "lot", "log", "cog"])).toBe(4);
    expect(wordTransformation("hit", "hhh",	["hhh", "hht"])).toBe(2);

    expect(wordTransformation("hit", "cog",	["hot", "dot", "dog", "lot", "log", "cog"])).toBe(4);
    expect(wordTransformation("hit", "cog",	["hot", "dot", "dog", "lot", "log"])).toBe(0);
})