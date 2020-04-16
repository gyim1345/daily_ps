이해:

숫자 배열들이 들어오는데

그것으로 - 를 붙여서 값의 변화를 주면서

배열의 합이 target 와 같은 수의 갯수를 구한다.

계획:

재귀로 모든 경우의 수를 거쳐 가게끔 해서 그 결과물의 마지막의 합이 target이랑 같을 시에 count에 1울 더해준다.

재귀할 때 두 개를 부른다. 하나는 현제 값의 +값과 다른 하나는 -값을 해서 배열의 길이까지 돌려줘서 그 배열의 길이까지 돌려주면 합산을 해서 target 값이 맞는다면 count+1 해주고 아니면 말고 그리고 배열의 길이는 depthcount로 확인해서 돌려주자.

회고:

트리 구조는 처음 풀어 보는 것 같다. 

트리는 다들 재귀로 푸는 것 같아서 나도 트리로 풀어 봤는데 어려웠다.

글로벌 변수를 쓰기 위해서 재귀 함수 자체를 최상위 함수 안에 넣어 버리는 불상사를 저질렀다. 다음엔 다른 사람 코드를 보면서 리팩토링을 해보도록 하겠다.