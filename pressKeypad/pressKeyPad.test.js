
// - * 을 10, 0을 11, # 를 12 로 바꾼다.

// - 거리를 현제 절대값((위치 - 원하는 위치) % 3 ) 해서 더 가까운것을 옮긴다. 
// 단 거리가 같을때는 주어진 잡이수를 옮긴다.

const solution = (numbers, hand) => {
    numbers = numbers.map(number => {
        if (number === 0) {
            return 11;
        }
        return number;
    });

    const position = [];
    let leftPosition = 10;
    let rightPosition = 12;

    numbers.forEach(number => {
        if (number === 1 || number === 4 || number === 7) {
            leftPosition = number;
            position.push("L");
            return;
        }

        if (number === 3 || number === 6 || number === 9) {
            rightPosition = number;
            position.push("R");
            return;
        }

        let leftDistance = calculateDistance(leftPosition, number);
        let rightDistance = calculateDistance(rightPosition, number);

        if (leftDistance > rightDistance) {
            rightPosition = number;
            return position.push("R");
        }

        if (leftDistance < rightDistance) {
            leftPosition = number;
            return position.push("L");
        }

        if (leftDistance === rightDistance) {
            if (hand === "right") {
                rightPosition = number;
                return position.push("R");
            }
            if (hand === "left") {
                leftPosition = number;
                return position.push("L");
            }
        }


    })
    return position.join("");
}

const calculateDistance = (position, targetPosition) => {
    let count = 0;

    while (position !== targetPosition) {
        if (position + 1 === targetPosition || position - 1 === targetPosition) {
            count += 1
            return count;
        }

        if (position > targetPosition) {
            position -= 3;
            count += 1;
            continue;
        }

        if (position < targetPosition) {
            position += 3;
            count += 1;
            continue;
        }
    }
    return count;
}


test('calculateDistance', () => {
    expect(calculateDistance(7, 8)).toBe(1);
    expect(calculateDistance(7, 5)).toBe(2);
    expect(calculateDistance(7, 2)).toBe(3);

    expect(calculateDistance(7, 4)).toBe(1);
    expect(calculateDistance(7, 1)).toBe(2);
    expect(calculateDistance(7, 8)).toBe(1);

    expect(calculateDistance(9, 3)).toBe(2);
    expect(calculateDistance(9, 2)).toBe(3);
    expect(calculateDistance(9, 5)).toBe(2);
    expect(calculateDistance(9, 11)).toBe(2);

    expect(calculateDistance(3, 11)).toBe(4);
    expect(calculateDistance(3, 8)).toBe(3);

});



test.only('solution', () => {
    expect(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")).toBe("LRLLLRLLRRL");
});