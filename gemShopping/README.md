# [보석 상점](https://programmers.co.kr/learn/courses/30/lessons/67258)

## 이해

- gems : 진열된 보석들 배열
- return : 진열된 모든 종류의 보석을 적어도 1개 이상 포함하는 가장 짧은 구간을 찾아서 구매

## 계획

(실패한 계획)

- 큐로 넣어서 적절하게 중복을 제거 해준다.

(성공한 계획)

- 맵을 이용해서 계속 넣어주다가 맵에 넣은 종류가 모든 보석들의 종류 갯수랑 일치 할때 위치를 새로운 배열에 넣어준다. 계속한다.
- 위치들을 넣은 배열을 정렬한다. 정렬할때 거리가
    1. 같으면 위치가 더 작은게 먼저 온다
    2. 아니면 더 짧은게 먼저 온다.
- 정렬된 위치들의 첫번째 값을 반환한다.

## 회고

queue로 풀려다가 4시간 동안 삽질 했다. 테스트 케이스를 다 통과 시켰는데도 안됬다. 그래서 계속 수정하다 보니 시간 초과도 떠서 결국엔 접었다.

접은 후에 맵을 썼다. 맵을 쓰니 생각보다 쉽게 통과 시켰다.