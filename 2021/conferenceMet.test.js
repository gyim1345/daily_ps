const solution = (enter, leave) => {

  const metArray = new Array(enter.length).fill(0);

  const entranceOrder = [...enter];
  const leaveOrder = [...leave];
  let currentPeopleInConference = {};

  while(leaveOrder[0]) {
    const personLeaving = leaveOrder[0];
    
    if(!currentPeopleInConference[personLeaving]) {
      const personEntering = entranceOrder.shift()
      currentPeopleInConference[personEntering] = [personEntering,[]];
    }

    updatePersonMet(currentPeopleInConference);


    if(currentPeopleInConference[personLeaving]) {
      metArray[personLeaving -1] = currentPeopleInConference[personLeaving][1].size - 1;
      leaveOrder.shift();
      delete currentPeopleInConference[personLeaving]
    }
  }

  return metArray;
}

const updatePersonMet = (currentPeopleInConference) => {
  const objects = Object.keys(currentPeopleInConference)
  Object.keys(currentPeopleInConference).forEach(number => {
    currentPeopleInConference[number][1] = new Set([...currentPeopleInConference[number][1], ...objects]);
  })
}


test('solution', () => {
  expect(solution(	[1, 3, 2], [1, 2, 3])).toEqual([0, 1, 1]);
  expect(solution(	[1, 4, 2, 3], [2, 1, 3, 4])).toEqual([2, 2, 1, 3]);
});
