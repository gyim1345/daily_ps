function solution(bridge_length, weight, truck_weights) {
    let bridgeArr = [];
      let time = 0;
      while (truck_weights[0] || bridgeArr[0]) {
        bridgeArr = bridgeArr.map((x) => {
          x[1] -= 1;
          return x;
        });
        bridgeArr = bridgeArr.filter((x) => x[1] !== 0);
        time += 1;
        let totalWeightOnBridge = bridgeArr.reduce((acc, cur) => acc + cur[0], 0);
        if (totalWeightOnBridge + truck_weights[0] <= weight) {
            bridgeArr.push([truck_weights.shift(), bridge_length]);
        }
      }
      return time;
    }


    test('truck', () => {
        expect(solution(2,10,[7,4,5,6])).toBe(8);
        expect(solution(100, 100,[10])).toBe(101);
        expect(solution(100, 100,[10,10,10,10,10,10,10,10,10,10])).toBe(110);
    })