// tickets을 sorting 한다. 첫자리가 같을시에 두번째 자리를 알파벳 순서로.

// BFS로 짠다.

// 고우~


const travelRoute = (tickets) => {

    tickets.sort((a, b) => {
        if (a[0]> b[0]){
            return 1;
        }
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] === b[0]) {
            if (a[1] > b[1]) {
                return 1;
            }
            else return -1;
        }
        return 0;
    })
    console.log(tickets)
    let result = [];
    function bfs(unusedTicket = tickets.slice(), currentLocation = 'ICN', stack = ['ICN']) {
        let queue = [];

        if (stack.length === tickets.length + 1) {
            result.push(stack);
        }
        if (unusedTicket[0]) {
            unusedTicket.forEach((ticket, i) => {
                if (ticket[0] === currentLocation) {
                    queue.push(ticket);
                }
            })
        }

        while (queue[0]) {
            let head = queue.shift();
            let unusedTickets = unusedTicket.filter(ticket => ticket !== head);
            bfs(unusedTickets, head[1], [...stack, head[1]]);
        }
    }

    bfs();


    console.log(result)
    return result;
}

test("travelRoute", () => {
    // expect(travelRoute([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]])).toEqual(["ICN", "JFK", "HND", "IAD"])
    expect(travelRoute([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]])).toEqual(["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"])
    // expect(travelRoute([["ICN", "COO"], ["ICN", "BOO"], ["COO", "ICN"], ["BOO", "DOO"]])).toEqual(["ICN", "COO", "ICN", "BOO", "DOO"])



})