const trafficEnforcementCamera = (routes) => {
    console.log(routes)
    let hashTable = {};
    routes.sort((a, b) => a[0] - b[0]);
    let leftPos = routes[0][0];
    let RightPos = routes[0][1];
    let count = 0;
    for (let i = 1; i < routes.length; i++) {
        console.log(leftPos, RightPos)
        if (leftPos <= routes[i][0] && routes[i][0] <= RightPos) {
            console.log(i)
            leftPos = routes[i][0];
            if (RightPos > routes[i][1]) {
                console.log("assssssssssssssssssssssssssss")
                RightPos = routes[i][1]
            }
        } else {
            console.log(leftPos, RightPos, count)

            count += 1;
            leftPos = routes[i][0];
            RightPos = routes[i][1]
        }
    }

    return count+1;
}



test('trafficEnforcementCamera', () => {
    expect((trafficEnforcementCamera([[-20, 15], [-14, -5], [-18, -13], [-5, -3]]))).toBe(2);
    // expect((trafficEnforcementCamera([[-20, -19], [-19, -18], [-18, -17], [-17, -16]]))).toBe(2);
})