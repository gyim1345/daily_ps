const printer = (priorities, location) => {
    const prioritiesWithIndexLocation = priorities.map((x,i) => x= {priority: x,location: i});
    
   return recursiveShit(prioritiesWithIndexLocation,location);
}

const recursiveShit = (prioritiesWithIndexLocation, location, count =0) =>{
    
    const MaxPriority1= Math.max(...prioritiesWithIndexLocation.map((x,i) => x.priority));
    
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
    
    return recursiveShit(prioritiesWithIndexLocation,location, count)
}

test( 'printer', () => {
    expect(printer([2, 1, 3, 2],2)).toBe(1);
    expect(printer([1, 1, 9, 1, 1, 1],0)).toBe(5)
})