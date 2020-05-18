function solution(k, room_number) {
  let hotelRoom = new Map();
  return room_number.map(room => {
    if (hotelRoom.get(room) === undefined) {
      hotelRoom.set(room, room + 1)
      console.log(hotelRoom,'a')
      return room;
    }
      let findNextRoom = room;
      let passedRooms = [];
      while (hotelRoom.get(findNextRoom) !== undefined) {
        passedRooms.push(findNextRoom);
        findNextRoom = hotelRoom.get(findNextRoom);
      }

      passedRooms.forEach(passedRoom => hotelRoom.set(passedRoom, findNextRoom +1) )
      console.log(hotelRoom,'b')
      hotelRoom.set(findNextRoom, findNextRoom + 1)
      console.log(hotelRoom,'c')
      console.log(hotelRoom.get(2))

      return findNextRoom;

  })

}


test('solution', () => {
  expect(solution(10, [1, 3, 4, 1, 3, 1])).toEqual([1, 3, 4, 2, 5, 6])
  // expect(solution(10,[1,3,4,1,3,1,10,10])).toEqual([1,3,4,2,5,6,10,11])

})