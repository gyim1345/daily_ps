const maxMinNumber = (string) =>{
        
    return stringtoArrayandSort(string).shift() + ' ' + stringtoArrayandSort(string).pop() 
}


const stringtoArrayandSort = (string) => {
    return string.split(" ").sort(function(a,b) {return a-b})
}



test('stringtoArrayandSort', () => {
    expect(stringtoArrayandSort('1 2 4 3')).toEqual(['1','2','3','4']);
    expect(stringtoArrayandSort('-1 -2 -4 -3')).toEqual(['-4','-3','-2','-1'])

}) 

test('maxMinNumer', () => {
    expect(maxMinNumber('1 2 3 4')).toBe('1 4');
    expect(maxMinNumber('-1 -2 -3 -4')).toBe('-4 -1')
})