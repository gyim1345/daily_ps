const solution = (startLocation, movement) => {
  let [kingLocation, rockLocation] = startLocation.split(' ');

  movement.forEach(move => {
    const currentKingLocationNumber = getLocation(kingLocation);
    const currentRockLocationNumber = getLocation(rockLocation);

    const [x ,y ] = moves[move];
    
    const newKingLocation = updateLocation(currentKingLocationNumber, x, y);
    const newRockLocation = updateLocation(currentRockLocationNumber, x, y);

    if(!newKingLocation || !newRockLocation) {
      return;
    }
    kingLocation = changeLocationToString(newKingLocation);
    rockLocation = changeLocationToString(newRockLocation);
  })
  return [kingLocation, rockLocation];
}

const changeLocationToString = (locationNumber) => {
  const [x,y] = locationNumber;
  return numberLocationToString[x] + y;
}

const getLocation = (location) => {
  const [x, y] = location.split('')
  return [stringLocationToNumber[x] ,Number(y)];
}

const updateLocation = (location, x, y) => {
  const newLocation = [location[0] + x, location[1] + y];
  if(newLocation[0] <= 0 || newLocation[0] >= 90 || newLocation[1] <= 0 || newLocation[1] >= 9) {
    return false;
  }
  return newLocation;
}

const stringLocationToNumber = {
  A: 10,
  B: 20,
  C: 30,
  D: 40,
  E: 50,
  F: 60,
  G: 70,
  H: 80
} 

const numberLocationToString = {
  10: 'A',
  20: 'B',
  30: 'C',
  40: 'D',
  50: 'E',
  60: 'F',
  70: 'G',
  80: 'H',
} 

const moves = {
  R: [10, 0],
  L: [-10, 0],
  B: [0,-1],
  T: [0,1],
  RT: [10,1],
  LT: [-10,1],
  RB: [10,-1],
  LB: [-10, -1],
}

test('solution', () => {
  expect(solution("A1 A2 5", ["B", "L", "LB", "RB", "LT"])).toEqual(["A1", "A2"]);
  expect(solution("A1 A2 5", ["RT"])).toEqual(["B2", "B3"]);
}); 
