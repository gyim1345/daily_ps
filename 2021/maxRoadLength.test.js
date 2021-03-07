const solution = (road, n) => {
  const indexZero = [];

  road.split('').forEach((el,i) => {
    if(el === '0') indexZero.push(i);
  })

  if(indexZero.length <= n) return road.length;
  
  let lengths = [];
  for(let i = n; i < indexZero.length; i ++) {
    const roadLength = indexZero[i] - (indexZero[i - n - 1] || 0) - 1;
    lengths.push(roadLength)
  }
  return Math.max(...lengths);
}


test('solution', () => {
  expect(solution('11101100110011011101110011100011111',4)).toBe(15);
  expect(solution('00111100',5)).toBe(8);
});