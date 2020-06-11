const lifeBoat = (people, limit) => {
    // let sortedPeople = people.sort((a, b) => b - a);

    // let count = 0;
    // for(let i = 0; i< people.length-count; i++ ) {
    //     console.log(sortedPeople[count] + sortedPeople[people.length-1-i])
    //     if(sortedPeople[count] + sortedPeople[people.length-1-i] <= limit) {
    //         count ++;
    //         console.log("Asd")
    //     }
    // }
    // return count;

    // people.sort(function(a, b){return a-b});
    // for(var i=0, j=people.length-1; i < j; j--) {
    //     console.log(people[i],people[j])
    //     if( people[i] + people[j] <= limit ) i++;
    // }    
    // return people.length-i;




    // let countBoat = 1;
    // let currentWeight = 0;
    // let reversed = false;
    // while (sortedPeople[0]) {
    //     if (currentWeight + sortedPeople[0] > limit) {
    //         if (reversed) {
    //             sortedPeople.reverse();
    //             currentWeight = sortedPeople.shift();
    //             countBoat += 1;
    //             reversed = false;
    //         } else {
    //             sortedPeople.reverse();
    //             reversed = true;
    //         }
    //     }
    //     else {
    //         currentWeight += sortedPeople[0];
    //         sortedPeople.shift();
    //     }
    // }
    // return countBoat;
// }



    let sortedPeople = people.sort((a, b) => b - a);
    let count = 0;
    let index = 1;
    while (sortedPeople[count] && count + index <= people.length) {
        console.log(sortedPeople[count], sortedPeople[people.length - index], " count: ", count , "index ", index, people.length  )
        if (sortedPeople[people.length - index] + sortedPeople[count] <= limit) {
            index += 1;
        }

        count += 1;
    }
    return count;
}

test('lifeBoat', () => {
    // expect(lifeBoat([70, 50, 80, 49], 100)).toBe(3);
    // expect(lifeBoat([70, 80, 50], 100)).toBe(3);
    // expect(lifeBoat([10, 20, 30, 40, 50, 60, 70, 80, 90], 100)).toBe(5);
})