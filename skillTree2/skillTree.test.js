// 순서를 배열로 만든다.  
// 문자열들을 skill중 아무거나 있는것을 따로 저장한다.  
// 그 저장한것을 뒤 부터 확인해서 뒤에께 있으면 앞에꺼 까지 있는지 다 확인을 한다 있으면 저장 없으면 무시. 
// 뒤에께 없으면 다음에 또 확인.


// const skillTree = (skill, skill_trees) => {
//   let answer = 0;
//   let regex = new RegExp(`[^${skill}]`, 'g');

//   return skill_trees
//       .map((x) => x.replace(regex, ''))
//       .filter((x) => {
//           return skill.indexOf(x) === 0 || x === "";
//       })
//       .length
// }

// test('skillTree', () => {
//     expect(skillTree('ABC', ['A', 'B'])).toBe(1);
//     expect(skillTree('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
//     expect(skillTree('CBD', ['EFG'])).toBe(1);
// });
 
const solution = (skill, skill_trees) =>{
  // console.log(skill_trees
    // .map(v => v.replace(new RegExp(`[^${skill}]`, 'g'), ''))
  

    // .filter(i => skill.startsWith(i))
    // .length
// )

const targetStr = 'abc#123';

// A-Z a-z 0-9 이외의 문자가 있는지 검사
let regexr = /[^A-Za-z0-9]/gi;
let regex= new RegExp(`[^${skill}]`, 'gi')
///g 는 컨디션을 만족하는 순간 멈추는데 이것을 계속 이어가게 해줌
// i 는 대소문자 무시
// new RegExp(`[^${skill}]`, 'gi') 
// new RegExp 는 위에 정규식 시작과 끝내는거 /..../ 와 같음
// 뒤에 gi 컨디션은 , 로 분리 해서 '' 안에 씀. 
// [^...]은 ^는 부정 [...]안에 만족하는 모든것. 그래서 `[^${skill}]` 는 skill을 만족하지 않는 모든것
// /.../ 대신 new RegExp 쓰는 이유는 변수를 넣을려고. ${변수}?
// 위에 /.../ 안에는 변수가 안들어가는듯.
console.log(targetStr.replace(regexr, '')); //
console.log(skill_trees)
console.log(skill_trees.map(e=> e.replace(regex, '')))
return skill_trees.map(e=> e.replace(regex, '')).filter(e =>skill.startsWith(e)).length
// startsWith는 그 시작하는 값이 같은지 true/false로 반환해줌
// 'asdf'.startsWith('asd') 은 true. asdf는 asd로 시작하는게 맞으니.
// 'asd'.startsWith('asdf') 는 false. f가 모자르니.
// 고로 skill.startsWith(각 정규식으로 구한값인 ( 'BCD' / 'CBD' / 'CB' / 'BD' ) 하나씩 돌려서 필터를 함. 맞으면 저장 아니면 걸러)

return 0

  }


test('solution', () => {
  // expect(solution('CBD', ['CBADF'])).toBe(1)
  expect(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
  // expect(solution('ABC', ['EFG'])).toBe(1);
});


