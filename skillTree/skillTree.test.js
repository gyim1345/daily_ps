// 순서를 배열로 만든다.  
// 문자열들을 skill중 아무거나 있는것을 따로 저장한다.  
// 그 저장한것을 뒤 부터 확인해서 뒤에께 있으면 앞에꺼 까지 있는지 다 확인을 한다 있으면 저장 없으면 무시. 
// 뒤에께 없으면 다음에 또 확인.


const skillTree = (skill, skill_trees) => {
    skill = skill.split('')
    let count = 0;
    // console.log(Array(5).fill(NaN))
    // let asd = Array(5).fill(1);
    // console.log(asd[1] *NaN)
    // while(count<skill.length) {
    //     skill_trees.filter()

    // }

//     const newTree = skill_trees.filter(tree => tree.some(x=> skill.includes(x)))
//    const newTree = skill_trees.filter(x=> skill.some('A'))
//     const includeLetter = (skill) =>{
//         skill.forEach
//     }
// skill tree 에 하나라도 있는것을 필터
let filteredSkillTreeWithAtLeastOneSkill = hasAtLeastOneSkill(skill, skill_trees)
// console.log(filteredSkillTreeWithAtLeastOneSkill)

//skill에 해당 되는 letter 만 추출.
let newFilteredSkillTreeWithOnlyTheSkills =extractOnlyTheLettersOfArrayFromArrayOfWords(filteredSkillTreeWithAtLeastOneSkill, skill)
// console.log(newFilteredSkillTreeWithOnlyTheSkills)

//sort해서 sort 하기 전에 와 sort한 후가 다르면 탈락
let sortednewFilteredSkillTreeWithOnlyTheSkills = newFilteredSkillTreeWithOnlyTheSkills.slice(0,newFilteredSkillTreeWithOnlyTheSkills.length).map(words =>words =words.split('')
.sort(
    function (a, b) {

        if (skill.indexOf(a) > skill.indexOf(b)) {
          return 1;
        } else {
          return -1;
        }
        
      }
).join(''))

//https://gist.github.com/ecarter/1423674>

// function mapOrder (array, order, key) {
  
//     array.sort( function (a, b) {
//       var A = a[key], B = b[key];
      
//       if (order.indexOf(A) > order.indexOf(B)) {
//         return 1;
//       } else {
//         return -1;
//       }
      
//     });
    
//     return array;
//   };





console.log(newFilteredSkillTreeWithOnlyTheSkills,sortednewFilteredSkillTreeWithOnlyTheSkills)
console.log(skill)
// newFiltered

// let newfilteredword = [];
// while(count<skill.length){
//     // count = 0;
//     console.log(filteredSkillTreeWithAtLeastOneSkill = filteredSkillTreeWithAtLeastOneSkill
//         .filter(wordOfSkillTree => wordOfSkillTree.includes(skill[count])))
//     count ++;
// }
// console.log(newfilteredword)

 


return 2;
}

const hasAtLeastOneSkill = (skill, skill_trees) =>
skill_trees.filter(stringofskilltree=> stringofskilltree.split('').some(letterofskilltree=> skill.includes(letterofskilltree)))

const extractOnlyTheLettersOfArrayFromArrayOfWords = (ArrayOfWords,LettersOfArray) =>
ArrayOfWords.map(word => word = word.split('').filter(letter => LettersOfArray.includes(letter) ).join('') )

function (a, b) {
    var A = a[key], B = b[key];
    
    if (order.indexOf(A) > order.indexOf(B)) {
      return 1;
    } else {
      return -1;
    }
    
  };
  

test('skillTree', () => {
    // expect(skillTree('ABC', ['A', 'B'])).toBe(1);
    expect(skillTree('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
    // expect(skillTree('CBD', ['EFG'])).toBe(1);
});





// const skillTree = (skill, skill_trees) => 
// skill_trees
//   .map(v => v.replace(new RegExp(`[^${skill}]`, 'g'), ''))
//   .filter(s => skill.startsWith(s)).length;


// test('skillTree', () => {
//     expect(skillTree('ABC', ['A', 'B'])).toBe(1);
//     expect(skillTree('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
//     expect(skillTree('CBD', ['EFG'])).toBe(1);
// });

