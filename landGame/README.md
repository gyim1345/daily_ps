# [땅따먹기](https://programmers.co.kr/learn/courses/30/lessons/12913)

## 이해 

땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.

N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다. 

마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최대값을 return하는 solution 함수를 완성해 주세요

제한사항  
행의 개수 N : 100,000 이하의 자연수  
열의 개수는 4개이고, 땅(land)은 2차원 배열로 주어집니다.  
점수 : 100 이하의 자연수  

## 계획
<!-- 
배열 안에 있는 배열들 안의 값들을 오름 차순으로 정렬한다.

배열 안의 배열들을 배열들 안의 값의 최대값 기준으로 내림 차순으로 정렬한다.

첫번째 배열의 최대값을 뽑는다

첫번째 배열을 없애던가 지우던가 무시한다.

나머지 배열들의 최대값을 지우던가 무시한다.

그 값을 제외 하고 최대값 기준으로 배열들을 정렬한다.

반복한다.

sort해서 배열안에 있는 배열들을 최대값으로 먼저 sort 한다. sort sort 한다음에 최대값 부터 뽑는다.  -->

## 회고

위 계획은 안되는 계획... 계획 부터 문제가 있었음... 다른 사람 풀이 보고 풀었다. 

조건 열의 최대 갯수 4개를 써서 하드 코딩 한 문제 풀이였다.