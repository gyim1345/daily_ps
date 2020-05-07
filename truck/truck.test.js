// 대기 배열(truck_weights)를 하나씩 shift해서 새로운 onBridge 에 넣는다.
// onBridge의 합이 weight 보다 작을때 까지 넣는다.
// 넣으면 bridgelength만큼 count를 올려주고 onBridge안에 
// 있는 것들을 passedTruck 에 넣는다. 
// truck_weight가 없어질때까지 돌린다.

function solution(bridge_length, weight, truck_weights) {
    
    const onBridge = [];
    const passedTruck = [];
    let passedTime = 0;
    while(truck_weights[0] || onBridge[0]) {
        const index = 0;
        let passedTimeOnBridge = 0;
        console.log(passedTime, passedTruck, onBridge, truck_weights)

        while(onBridge.reduce((a,b) => a+b, 0)+truck_weights[index]<=weight){
            onBridge.push(truck_weights.shift());
            if(!onBridge[0])
            passedTime += 1;
        }
        console.log('a',passedTime, passedTruck, onBridge, truck_weights)

        if(onBridge[0] ){
            passedTruck.push(onBridge.shift());
            if(onBridge[0]){
            passedTime += 1;
            }
            else {
                passedTime += bridge_length;
            }
        }
        console.log('b',passedTime, passedTruck, onBridge, truck_weights)

        // while(onBridge.reduce((a,b) => a+b, 0)+truck_weights[0]<=weight){
        //     onBridge.push(truck_weights.shift());
        //     if(!onBridge[0])
        //     passedTime += 1;
        // }
        
        console.log('c', passedTime, passedTruck, onBridge, truck_weights, weight)
        // else
        // if(!onBridge[0]) {
        //     console.log(truck_weights[index], weight)
        //     onBridge.push(truck_weights.shift());
        //     passedTime += 1;
        //     passedTimeOnBridge =0;

        // } 
    }
    return passedTime+1;
}


test('truck', () => {
    expect(solution(2,10,[7,4,5,6])).toBe(8);
    expect(solution(100, 100,[10])).toBe(101);
    expect(solution(100, 100,[10,10,10,10,10,10,10,10,10,10])).toBe(110);
    // expect(solution(100, 1,[10])).toBe(0);


})