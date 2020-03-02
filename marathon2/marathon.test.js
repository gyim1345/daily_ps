const marathon =(participant, completion) => {

let regex= new RegExp(`[^${completion}]`, 'i')
// console.log(regex)
// completion.forEach(comp => console.log(participant.map ))
// completion.forEach(comp => console.log(preg_match(`(\b${comp}\b|\bfart\b)`, $gun1))
completion.forEach(comp =>console.log( participant.map(element => element.replace(RegExp(`[^${comp}]`, 'gi'), ''))))
   console.log(participant)
return 'leo'
}

test("marathon", () => {
    expect(marathon(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo");
    // expect(solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'mislav', 'ana'])).toBe('mislav');
})


x.forEach(element =>  
    copy.filter(v=> v== element).length >1 ? temp.push(element) : ""


  return temp.length  