const solution = (dirs) => {
  const directionMap = {};
  let currentLocation = [0,0];
  let count = 0;

  dirs.split('').forEach(direction => {
    const newLocation = getNextLocation(direction, currentLocation);

    if(newLocation.join('').includes('6')) {
      return;
    }

    const a = [newLocation.join(''), currentLocation.join('')].join('');
    const b = [currentLocation.join(''), newLocation.join('')].join('');

    if(!directionMap[a]) {
      count += 1;
      directionMap[a]= true;
      directionMap[b]= true;
    }

    currentLocation = newLocation
  })

  return count;
}

const getNextLocation = (direction ,currentLocation) => {
  const [x,y] = currentLocation;
  if(direction === 'U') {
    return [x, y + 1];
  }
  if(direction === 'D') {
    return [x, y - 1];
  }
  if(direction === 'R') {
    return [x + 1, y];
  }
  if(direction === 'L') {
    return [x - 1, y];
  }
}

test('solution', () => {
  expect(solution('ULURRDLLU')).toBe(7);
  expect(solution('LULLLLLLU')).toBe(7);
  expect(solution('UUUUUUUUUUUUUUUUUUUUUUUUDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR')).toBe(20);
});