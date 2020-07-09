function solution(files) {
    let filesWithIndex = files.map((x,i) => x= {value: x, index: i} )
    
    filesWithIndex.sort((a,b) => {
        const arrayA =  a.value.split(/([^0-9]+)(\d+)(.*)/).filter(e=>e);
        const arrayB =  b.value.split(/([^0-9]+)(\d+)(.*)/).filter(e=>e);
        const headA = arrayA[0].toLowerCase();
        const headB = arrayB[0].toLowerCase();
        const numberA = Number(arrayA[1].substring(0,5));
        const numberB = Number(arrayB[1].substring(0,5));
    
        if(headA !== headB) {
            return headA.localeCompare(headB);
        }
        
        if(numberA !== numberB) {
            return numberA - numberB;
        }
        return a.index - b.index;
    })
    
    return filesWithIndex.map(x=> x.value);
}