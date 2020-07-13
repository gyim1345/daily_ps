# [타일 장식물](https://programmers.co.kr/learn/courses/30/lessons/43104)

## 이해

- 타일의 개수 N이 주어질 때, N개의 타일로 구성된 직사각형의 둘레를 return 하도록 solution 함수를 작성하시오.

## 계획

계획 1  
- short와 long으로 나눈다.
- 다음 블럭이 붙으면, short = long이 되고, long = short + long이 된다.
- N회 반복해서, short * 2 + long * 2 값을 return 한다

계획 2  
- 피보나치 수를 써서 해당 피보나치 n 값에 *2 +  피보나치 n+1 *2 를 리턴한다.

## 회고
