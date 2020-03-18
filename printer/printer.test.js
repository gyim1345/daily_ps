// 현제 location을 객체로 만들어서 저장해서 priority에 따라 밑에 있는 작업을 해준다.

// 중요도가 낮은게 높은것보다 앞에 있으면 제일 앞에 있는 인쇄물을 뒤로 넣는다. 그래서 제일 중요도가 높은 인쇄물이 priorities의 배열의 첫번째에 들어 올때까지 위에 뒤로 보내는 작업을 한다.

// 오면 이제 그 인쇄물을 뽑는다.

// 뽑을때 마다  count를 해주고  혹시 location이 내가 원하는 location이랑 같을때 count를 반환해준다.


const printer = (priorities, location) => {
    let count =0;
    const prioritiesWithIndexLocation = priorities.map((x,i) => x= {priority: x,location: i});
   
    while(priorities.length !== 0){
    const MaxPriority1= Math.max(...prioritiesWithIndexLocation.map((x,i) => x= x.priority));
  
    if(prioritiesWithIndexLocation[0].priority === MaxPriority1) {
        count +=1;
        if(prioritiesWithIndexLocation[0].location === location ){
            return count
        }
        prioritiesWithIndexLocation.shift();

    }
    else {
        const temp = prioritiesWithIndexLocation.shift();
        prioritiesWithIndexLocation.push(temp);
    }
    }
}

test( 'printer', () => {
    expect(printer([2, 1, 3, 2],2)).toBe(1);
    expect(printer([1, 1, 9, 1, 1, 1],0)).toBe(5)
})