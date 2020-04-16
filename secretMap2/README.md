# 비밀지도

- https://programmers.co.kr/learn/courses/30/lessons/17681/solution_groups? language=javascript에 있는 다른 사람 풀이 보고 공부하기.

## 실행

## 회고

 arr1.map((a, i) =&gt; (a | arr2[i])
         .toString(2)
         .padStart(n, 0)
         .replace(/0/g,' ')
         .replace(/1/g,'#')

a | b에서 |는 a 와 b를 비트로 바꿔서 or 연산을 해준다. a가 5 b가 6이면 101 OR 110 계산하면 111 하고 반환은 7이다. 

toString(x)은 그 값을 x 진수로 바꿔서 변환한다는 것이고

padStart는(n, 0) 은 값의 길이가 n 만큼 안 채워져있다면 앞에서부터 0으로 채워서 전체 길이가 n 만큼까지 될 수 있도록 채운다.

.replace(/0/g,' ')는 정규식인데 이것은 /0/에서 //를 의미하는 바는 정규식 시작과 정규식 끝을 나타낸다. 그리고 그 안에 있는 0은 해당되는 값. g : 글로벌의 뜻. 전역 매칭을 한다. 처음부터가 아닌 전체에서 정규식이 맞는 걸 찾는다. 그래서 0을 모든 곳에서 찾아서 ' '로 바꿔 준다.

.replace(/1/g,'#')은 1을 모든 곳에서 찾아서 1로 바꿔주는 것이다.

위의 replace 두개를 합쳐서  
replace(/1|0/g, a => +a ? '#' : ' '))  
로 쓸 수 있다.  

1 혹은 0 을 가져오는데 그값들을 +a(문자를 숫자화) 를 해서 맞으면 '#' 으로 하고 아니면 ' ' 바꾼다. '0' 을 숫자화 해서  0 으로 해서 if에 넣으면 false 이니 가능하다.