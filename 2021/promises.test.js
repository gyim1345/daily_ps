const solution = (a,b,c) => {

  const promise1 = Promise.resolve(a);
  const promise2 = b;
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, c);
  });

  return Promise.all([promise1, promise2, promise3]).then((values) => {
    return values.reduce((acc,cur)=> acc + cur);
  });

}

test('solution', () => {
  return solution(10,20,30).then(result => {
    expect(result).toBe(10 + 20 + 30);
  })
});



