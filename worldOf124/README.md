# [124 나라의 숫자](https://programmers.co.kr/learn/courses/30/lessons/12899)

## 이해
124 나라에서는 10진법이 아닌 자신들만의 규칙으로 수를 표현
124 나라는 자연수만 존재한다.  
모든 수를 표현할 때 1,2,4만 사용한다.  

## 계획
10진수를 3진수로 바꾸고 3진수를 124진수로 바꾼다.  
10진수 -> 3진수는 toString(3)  
3진수 -> 124진수는 아래의 조건에 따라 바꿈.  

3진수의 뒷자리 부터 확인한다.  
자릿수에 1 혹은 2이면 1 혹은 2로 바꿔준다.  
자릿수에 0이 있으면 4로 바꿔준 후 전체 값에 그 자릿수에서 -10 해준다.  
예를들어서 102 이면 뒷자리 부터 봐서 2는 2로 바꿔준다. 그다음 2번째 자릿수를 볼때 0이니 4로 바꿔준후에 그 자릿수에서 바로 -10 해준다 => 그러면 10 -10  하면 0 이 된다.  결국엔 답이 42가 나온다.

## 회고
기봉: 3진수로 바꿔서 풀이 안된다고 했는데 풀었다 뿌듯하다.
영규: 너무 어렵다 ㅠㅠ