<https://programmers.co.kr/learn/courses/30/lessons/49993>
<https://github.com/wholemann/daily-coding-dojo/blob/master/20200110/skilltree.test.js>

이해

skill: 순서를 만족시켜야 하는 문자열  
skill_tree: 임의로 작성한 문자열  
return: 임의로 작성한 문자열 skill_tree 가 순서 skill을 만족시키는 수.

계획

순서를 배열로 만든다.  
문자열들을 skill 중 아무거나 있는 것을 따로 저장한다.  
그 저장한 것을 뒤부터 확인해서 뒤에 것 있으면 앞에 거까지 있는지 다 확인을 한다 있으면 저장 없으면 무시.
뒤에 것 없으면 다음에 또 확인.

- skill tree에 하나라도 있는 것을 필터
- 위에 필터 된 거랑 처음에 들어온 입력값 skill tree의 길이를 비교해서 길이 차만큼 count에 더해준다.(edge case: skill에 하나도 해당 안 되면 조건 만족됨)
- skill의 순서를 만족하는지 sort로 확인
- skill의 선행조건을 만족하는지 확인.(앞뒤 글자 확인해서ㅓ 앞에 없고 뒤가 있으면 제외)
- skill과 skilltree의 길이를 비교해서 그 비교한 만큼의 문자가 인덱스 0부터  그 길이 -1 만큼의 인덱스가 같으면 count에 +1 추가
- 총 count를 return 해준다.
실행

회고

위에 링크 풀이법을 따라함.
정규식으로 하니 엄청 짧아진다. 그리고 startsWith도 은근 개꿀.

```javascript
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
console.log(skill_trees.map(e=> e.replace(regex, '')).filter(e =>skill.startsWith(e)))
// startsWith는 그 시작하는 값이 같은지 true/false로 반환해줌
// 'asdf'.startsWith('asd') 은 true. asdf는 asd로 시작하는게 맞으니.
// 'asd'.startsWith('asdf') 는 false. f가 모자르니.
// 고로 skill.startsWith(각 정규식으로 구한값인 ( 'BCD' / 'CBD' / 'CB' / 'BD' ) 하나씩 돌려서 필터를 함. 맞으면 저장 아니면 걸러)
```