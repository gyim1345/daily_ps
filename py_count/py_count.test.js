function solution(s){
    const sArr = s.split('');
    const {p, y} = sArr.reduce((acc, c) => {
      if (c.toLowerCase() === 'p') acc.p += 1;
      else if (c.toLowerCase() === 'y') acc.y += 1;
      return acc;
    }, {p: 0, y: 0});
  
    return (p === y);

}

    // s = s.toLowerCase().split('');
    // let count = 0;
    // for(let i = 0; i<s.length; i++){
    //     if(s[i] === 'p')
    //     count += 1;
    //     else if(s[i] === 'y')
    //     count += -1;
    // }
    // return count == 0;
    // console.log(count == 0);
    


    // console.log(s);
    // const reduce = (accumulator, currentValue) =>{ 
        
      
  
    //     let pAcc = accumulator.forEach(element => element.value  )
   
    
        
    //    return accumulator + currentValue
    // };

    // console.log(reduce(s,a));





test('solution', () => {
    expect(solution('pPoooyY')).toBe(true)
})