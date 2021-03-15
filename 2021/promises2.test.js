const solution = (a,b,c) => {

  return Promise.all([firstFunction(a) , secondFunction(b), thirdFunction(c)]).then((values) => {
    return values.reduce((acc,cur) => acc + cur);
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
  return expect(solution(10,20,30)).resolves.toBe(60);
});



// test('solution', () => {
//   expect(solution(1)).toBe(2);
// });