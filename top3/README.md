TOP

<https://programmers.co.kr/learn/courses/30/lessons/42588>

- 이해
  - 탑이 N 개만큼 있다.
  - 층은 인덱스+1이다
  - 각 탑마다 높이가 있다.
  - 탑은 높은 곳으로 송신한다.
  - 송신 한번 밖에 못한다.
  - 제일 가까이 있는 층(index)으로 송신한다.
  - 탑의 높이는 배열로 들어온다.
  - 배열에 있는 마지막 탑의 높이를 가지는 탑부터 송신을 한다.
  - 탑이 송신할 때 수신 받은 탑의 층(index+1) 을 기록한다

- 계획
  - 들어오는지 확인한다
  - 왼쪽 탑부터 시작해서 다른 탑이랑 비교해서 왼쪽에서 제일 가까이 있는 왼쪽보다 큰 것의 index를 돌려준다.
  - 돌려준 index들을 반환한다.

- 회고
  - 다른 사람의 풀이를 보고 이해하고 풀려고 했습니다. <https://github.com/wholemann/daily_ps/blob/master/20191129/tower.test.js>
  - unshift() 메서드는 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환합니다. <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift>
  - 배열 복사 할때   a = b 랑 a = [...b] 의 차이는...?


  