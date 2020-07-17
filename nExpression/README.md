# [N으로 표현](https://programmers.co.kr/learn/courses/30/lessons/42895?language=javascript)

## 이해

- N 이 주어 졌을때 N 과 사칙연산으로만 number을 구현해서 n 사용 횟수가 최소인 것을 return 하라.

## 계획

- 

n/n = 1
nn/ n = 11
nnn/n = 111

12/ 1 > 1 o
12/11 >1 o
12/111 >1 x

(nn + n) / n = 12
(nnn + n) / n = 112 
(nn + nn ) / n = 22
nnn + nnn / n  =222 
nnn + nnn + nnn )/ n = 333
nnn + nnn + nnn + nnn ) / n = 444
nnn + nnn + nnn + nnn + nnn ) / n = 555...

`- 1 : N = 5 /// number = 4 => (5 * 5 - 5) / 5`
`+ 1 : N = 5 /// number = 6 => (5 * 5 + 5) / 5`
`* 2 : N = 5 /// number = 10 => (5 + 5)`
`* 3 : N = 5 /// number = 15 => (5 + 5 + 5)`
`* 4 : N = 5 /// number = 20 => (5 + 5 + 5 + 5)`
`* 5 : N = 5 /// number = 25 => 5 * 5`


## 회고

- 