# [문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/60057?language=javascript)

## 이해

- s: 문자열
- result: 압축된 문자열들중 최소 길이

문자열들을 압축하는데 반복되는것을 압축한다.  
압축후 반복횟수 + 문자열로 바뀐다

## 계획

- 문자열을 배열로 만든다. 첫번째 요소 부터 문자열이 있는지 확인한다. 없으면 다음 문자열로 넘어간다. 있으면 다음 문자열을 포함해서 그 두 요소가 붙어 있는지 확인한다. 반복.... 없을때 까지 확인후 반복횟수만큼 압축한다. 위에 말했듯이 반복횟수 + 문자열로 바꾼다.

- 일단 배열을 2개 만든다.
첫번째 배열은 임시로 압축한 문자열을 넣을배열
두번째 배열은 배열의 길이를 저장하는 배열
이중 for문으로 첫번째 부터 그 위치에서부터 압축길이 만큼 비교해서 같으면 중복된배열에 넣어주고
결과 배열에 중복된 배열을 계산하든 카운트를 증가시키든 야무지게 넣는다. for문의 증가수는 i+=중복된 배열의 길이다.

## 회고

영규: 엥? 회고 적어야죠... 어.... 재미있었다... 롯캈았다.

기봉: 혹시 벽이랑 이야기 하는 느낌 아시나요? 장난이고 나름 재미있었다. 처음에 replace로 1 넣은것을 지웠는데 11개 중복될때 문자앞의 11도 다 지워서 replace대신 다른것을 썼다. 그리고 예외 케이스인 "문자열은 제일 앞부터 정해진 길이만큼 잘라야 합니다." 를 문제 끄트말이에 적어놔서 시간 낭비와 인지력 낭비를 오지게 많이 했다. 저 예외 케이스를 없앴으면 더 재미있었을텐데.