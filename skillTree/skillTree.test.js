// 순서를 배열로 만든다.  
// 문자열들을 skill중 아무거나 있는것을 따로 저장한다.  
// 그 저장한것을 뒤 부터 확인해서 뒤에께 있으면 앞에꺼 까지 있는지 다 확인을 한다 있으면 저장 없으면 무시. 
// 뒤에께 없으면 다음에 또 확인.


const skillTree = (skill, skill_trees) => {
    skill = skill.split('')
    let count = 0;

let filteredSkillTreeWithAtLeastOneSkill = hasAtLeastOneSkill(skill, skill_trees)

count = count + skill_trees.length - filteredSkillTreeWithAtLeastOneSkill.length

let newFilteredSkillTreeWithOnlyTheSkills = extractOnlyTheLettersOfArrayFromArrayOfWords(filteredSkillTreeWithAtLeastOneSkill, skill)

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

newFilteredSkillTreeWithOnlyTheSkills.map( el => el = '')

let count1 =0;

while(count1 < newFilteredSkillTreeWithOnlyTheSkills.length) {
  const conditionalSkill = skill.slice(0, newFilteredSkillTreeWithOnlyTheSkills[count1].length).join('')
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
