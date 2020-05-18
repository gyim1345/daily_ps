function solution(k, room_number) {
    let hotelRoom = new Map();
    room_number= room_number.map(room => getRoom(hotelRoom, room))
    console.log(hotelRoom)
    return room_number
  }
  
  const getRoom = (hotelRoom, room) => {
    if (!hotelRoom.get(room)) {
      hotelRoom.set(room, room + 1)
      console.log(room,room+1)
      return room;
    }
    
    hotelRoom.set(room, getRoom(hotelRoom, hotelRoom.get(room)))
    return hotelRoom.get(room);
  }


//     let answer = [];
//     let roomObj = {};
//     for(let i = 0; i<=k*2; i++){
//         roomObj[i] = 0;
        
//     }
//     roomObj[0] =1;
//     room_number.forEach(room=> {
//         let count =room;
//         while(roomObj[count] !== 0 &&roomObj[count]){
//             let tempLocation = count;
//             count = (count + roomObj[count]);
//             roomObj[tempLocation] +=1
//         }
//         roomObj[roomObj[count]+room] +=1;
//         console.log(roomObj[count], room, count, roomObj);
//         answer.push(count); 
        
//     }
//     )
//     console.log(roomObj)
//     console.log(answer)
//     return answer;
// }
    

test('solution', () => {
    // expect(solution(10,[1,3,4,1,3,1])).toEqual([1,3,4,2,5,6])
    expect(solution(10,[1,3,4,1,3,1,10,10])).toEqual([1,3,4,2,5,6,10,11])

})