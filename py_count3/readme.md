이해: <li>s: 들어오는 문자열</li>
      <li>return: 문자열들의 p와 y 가 같은지</li>
      <li>case insensitive</li>
      <li>문자열은 알파벳만 들어옴</li>
      <li>문자열은 50이하 자연수</li>

계획: 
1. s안의 p 와 y 의 계수 구하기
2. p와 y의 계수 비교 해서 반환

실행: 
1. s 안의 p 와 y의 계수 구한후 길이 비교하고 true false 반환

회고: <li>정규식표현 RegExpression 이해하기 힘듬.</li>

노트:

match().length 가 null 이면 안됨

match(/p/ig) 에서 /p는 p를 매칭해서 돌려준다. /i 는 caseinsensitive. g 는 globally 이다

그래서 s.match(/p/ig).length 라고 하면 s 내에 있는 p 값들을 caseinsensitive 하게 globally 찾아서 그 찾은 만큼의 길이를 구한다.

s = 'pPoooyY' 라고 하고
g 없이 'pPoooyY' 를 넣을 경우

```javascript
s.match(/p/i) //[ 'p', index: 0, input: 'pPoooyY', groups: undefined ]
```

이렇게 나오고 g를 넣을시에 s.match(/p/ig)

```javascript
s.match(/p/ig) // [ 'p', 'P' ]
```

이렇게 나온다.
