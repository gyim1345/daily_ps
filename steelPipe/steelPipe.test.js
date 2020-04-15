const steelPipe = (arrangement) => {
    const arrangementArray = arrangement.split('');

    const laserPosition = getPositionOfLaser(arrangement)

    const newArrangementArray = removeLaser(arrangementArray, laserPosition)

    const positionOfSteel = getPositionOfSteel(newArrangementArray)

    const pipeCount = getPipeCounts(positionOfSteel,laserPosition)
    
    return pipeCount;
}

const removeLaser = (arrangement, laserPosition) => {
    let count =0;
    for(let i = 0; i< arrangement.length; i += 1) {
        if(laserPosition[count]===i) {
            arrangement[i] = 'a';
            arrangement[i+1] = 'b'
            count += 1
        }
    }
    return arrangement
}


const getPipeCounts = (positionOfSteel, laserPosition) => {
    let count = 0;
    positionOfSteel.forEach(arrSteelPos => laserPosition.forEach(laserPos=> {
        if(arrSteelPos[0]<laserPos && laserPos<arrSteelPos[1]) {
            count += 1
        }
     }))
    return count+positionOfSteel.length;
}


const getPositionOfSteel = (array) => {
    const storePair = [];
    while(array.indexOf('(') !== -1) {
        const pair = findPair(array)
        storePair.push(pair);
        array[pair[0]]='c'
        array[pair[1]]='d'
    }
    return storePair
}

const findPair =  (array) => {
    return [array.slice(0,array.findIndex(x => x=== ')')).lastIndexOf('('), array.findIndex(x => x=== ')')]
}

const getPositionOfLaser = (string) => {
    return string.split('').map( (x,i) => {
        if(x+string[i+1] === '()')
            return i
    }).filter(x => x !== undefined)
}


test('getPipeCounts', () => {
    expect(getPipeCounts([ [ 4, 9 ], [ 10, 13 ], [ 3, 16 ], [ 2, 17 ], [ 18, 21 ] ], [ 0, 5, 7, 11, 14, 19 ])).toBe(17);

})

test('getPositionOfSteel', () => {
    expect(getPositionOfSteel(['a', 'b', '(', '(', '(',
    'a', 'b', 'a', 'b', ')',
    '(', 'a', 'b', ')', 'a',
    'b', ')', ')', '(', 'a',
    'b', ')'])).toEqual( [ [ 4, 9 ], [ 10, 13 ], [ 3, 16 ], [ 2, 17 ], [ 18, 21 ] ])
})

test('findPair', () => {
    expect(findPair([
        'a', 'b', '(', '(', '(',
        'a', 'b', 'a', 'b', ')',
        '(', 'a', 'b', ')', 'a',
        'b', ')', ')', '(', 'a',
        'b', ')'
      ])).toEqual([4,9])
})


test('steelPipe', ()=> {
    expect(steelPipe('()(((()())(())()))(())')).toBe(17);
})