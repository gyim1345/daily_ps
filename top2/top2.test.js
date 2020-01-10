function solution(heights) {
    return heights.map((v, i) => {
        console.log('m',i);

        while (i) {
            console.log('i', i);
            i--;
            console.log('heights[i]>v', heights[i], '>', v)
            if (heights[i] > v) {
                console.log('return i+1', i+1)

                return i + 1;
            }
        }
        console.log('return 0')
        return 0;
    });
}

test('solution', () => {
    expect(solution([3,9,9,3,5,7,2]	)).toEqual([0,0,0,3,3,3,6]
        )
})