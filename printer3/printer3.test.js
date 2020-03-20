const printer = (priorities, location) => {
    const prioritiesWithIndexLocation = priorities.map((x,i) => x= {priority: x,location: i});
  
   return recursiveShit(prioritiesWithIndexLocation,location);
}

const recursiveShit = (prioritiesWithIndexLocation, location, count=0) =>
     prioritiesWithIndexLocation[0].priority === Math.max(...prioritiesWithIndexLocation.map((x,i) => x.priority)) 
      ? prioritiesWithIndexLocation[0].location === location 
        ? count+1
        : recursiveShit(prioritiesWithIndexLocation.slice(1),location, count += 1)
      : recursiveShit([...prioritiesWithIndexLocation.slice(1),...prioritiesWithIndexLocation.slice(0,1)], location, count)


test( 'printer', () => {
    expect(printer([2, 1, 3, 2],2)).toBe(1);
    expect(printer([1, 1, 9, 1, 1, 1],0)).toBe(5)
})