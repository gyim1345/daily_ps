const lifeBoat = (people, limit) => {
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
    expect(lifeBoat([70, 50, 80, 49], 100)).toBe(3);
    expect(lifeBoat([70, 80, 50], 100)).toBe(3);
    expect(lifeBoat([10, 20, 30, 40, 50, 60, 70, 80, 90], 100)).toBe(5);
})