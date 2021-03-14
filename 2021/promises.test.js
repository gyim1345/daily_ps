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

function firstFunction(num) {
  return num;
}

function secondFunction(num) {
  return new Promise(resolve => {
    resolve(num);
  });
}

async function thirdFunction (num) {
  return num;
}

async function fourthFunction (num) {
  return await num;
}


test('solution', () => {
  return solution(10,20,30).then(result => {
    expect(result).toBe(10 + 20 + 30);
  })
});



