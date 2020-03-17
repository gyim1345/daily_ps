const practiceTest = (answers) => {

    const person1 = [1,2,3,4,5];
    const person2 = [2,1,2,3,2,4,2,5];
    const person3 = [3,3,1,1,2,2,4,4,5,5];
    const list = [person1, person2, person3];
    let AccList= [];

    AccList = list.map(person =>  
       answers.filter((x,answerIndex) => 
        x === person[answerIndex%person.length]).length)

    const MaxNumber = Math.max(...AccList);

    return AccList.map( (x,i) => x === Number(MaxNumber) ? x=i+1 : '' ).filter(it => it !== '')

}


test( 'practiceTest', () => {
    expect(practiceTest([1,3,2,4,2])).toEqual([1,2,3]);
    expect(practiceTest([1,2,3,4,5,1,2,3,4,5])).toEqual([1])
})