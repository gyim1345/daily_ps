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

newFilteredSkillTreeWithOnlyTheSkills = newFilteredSkillTreeWithOnlyTheSkills.filter( (x,i)=> x === sortednewFilteredSkillTreeWithOnlyTheSkills[i] )
console.log(newFilteredSkillTreeWithOnlyTheSkills)

/// skill 의 선행 조건을 만족하는지 확인.
// 앞뒤 글자를 확인해서 앞에가 없고 뒤에가 있으면 false 로 하고 지운다.

// 글자의 length 만큼 비교 해서 skill tree element 가 2개 있으면 skill의 2개 번째 글 까지 같아야한다.
newFilteredSkillTreeWithOnlyTheSkills.map( el => el = '')

let count1 =0;

while(count1 < newFilteredSkillTreeWithOnlyTheSkills.length) {
  conditionalSkill = skill.slice(0, newFilteredSkillTreeWithOnlyTheSkills[count1].length).join('')
  console.log(conditionalSkill)
  console.log(newFilteredSkillTreeWithOnlyTheSkills[count1])
  if(newFilteredSkillTreeWithOnlyTheSkills[count1] == conditionalSkill)
  count ++;
  count1 ++;
}


return count;
}

const hasAtLeastOneSkill = (skill, skill_trees) =>
skill_trees.filter(stringofskilltree=> stringofskilltree.split('').some(letterofskilltree=> skill.includes(letterofskilltree)))

const extractOnlyTheLettersOfArrayFromArrayOfWords = (ArrayOfWords,LettersOfArray) =>
ArrayOfWords.map(word => word = word.split('').filter(letter => LettersOfArray.includes(letter) ).join('') )

  

test('skillTree', () => {
    expect(skillTree('ABC', ['A', 'B'])).toBe(1);
    expect(skillTree('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA'])).toBe(2);
    expect(skillTree('CBD', ['EFG'])).toBe(1);
});
