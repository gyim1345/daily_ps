# 비밀지도

## 이해

- 비밀지도는 정사각형이다 ( n x n)
- 첫 번째 비밀지도와 두 번째 비밀지도를 합해서(OR 연산) 결과를 return 한다.
- 이때 결과는 #과 공백으로 한다.
- 이어지는 공백은 하나로 합쳐서 return 한다.
- 비밀지도는 arr 배열을 기반하여 그 안에 있는 값을 10진수에서 2진수로 변환해서 얻을 수 있다.

## 계획

- arr에서 10진수를 2진수로 변환한다. arr[i].toString(2)
- ['01001' , '10100',....] 안에 있는 string 값을 배열로 다시 만든다
-지도 1 
  [   
        [0, 1, 0, 0, 1],
        [1, 1, 1, 0, 0].
        [1, 0, 1, 0, 0],
        [1, 0, 0, 1, 0],
        [0, 1, 0, 1, 1]
    ]
지도 2
    [
        [1, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 0, 0]
    ]

- 지도 두 개를 더한다.
- [ [1, 2, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [2, 1, 2, 0, 1],
    [2, 0, 0, 1, 1],
    [1, 2, 1, 1, 1]
    ...
  ]

 [3,  '', 0, 1, 1],
  arr[i] = 2  arr[i-1] =undefined

- 숍과 공백으로 바꿀 때 새로운 배열에 넣는데 현재 위치가 공백이면 arr[i] 
- 더해서 0보다 크면 #으로 출력, 0이면 공백으로 출력.

## 실행

## 회고

우민: padStart랑 fill을 쓸 때 주의해야 하는 사항들을 배워서 좋았다.

영규: 두 달 만에 알고리즘을 했는데 재미있네요.

지혜: 너무 어려웠습니다.

기봉: 빡세게 짝 푸를 해서 어깨가 아프네요. 저도 많은 것을 배워서 좋았습니다. 
