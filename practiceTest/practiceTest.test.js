const practiceTest = (answers) => {

    person1 = [1,2,3,4,5];
    person2 = [2,1,2,3,2,4,2,5];
    person3 = [3,3,1,1,2,2,4,4,5,5];
    
    person1Acc = answers.filter((x,i) => x === person1[i%person1.length]).length
    person2Acc = answers.filter((x,i) => x === person2[i%person2.length]).length
    person3Acc = answers.filter((x,i) => x === person3[i%person3.length]).length
    
    const list = [person1Acc, person2Acc, person3Acc];
    const max = Math.max(person1Acc, person2Acc, person3Acc)
    const returnArray = [];
    for(let i = 0; i<list.length; i++) {
        if(list[i] === max)
            returnArray.push(i+1);
    }
    return returnArray
}


test( 'practiceTest', () => {
    expect(practiceTest([1,3,2,4,2])).toEqual([1,2,3]);
    expect(practiceTest([1,2,3,4,5,1,2,3,4,5])).toEqual([1])
})