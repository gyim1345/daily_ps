# 문제

두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한사항 두 수는 1이상 1000000이하의 자연수입니다.

---

1. 이해

- 입력값 n과 m
- 배열 index 0의 자리는 최대공약수, 배열 index 1의 자리는 최소공배수
- 두수의 곱은 최대공약수와 최소공배수의 곱과 같다.

2. 계획

- 들어오는 입력값들의 gcd를 구한다

- gcd를 구한 값으로 lcm을 구한다.

3. 실행

- m과 n중에 높은수와 낮은수를 낮은수로 나눠준다.

- 나눠주는수를 -1 둘다 나머지가 0이 될때까지 나눠준다.

- 이되면 그게 최대공약수다.

- 최대공약수에서 n를 나눈 몫, m를 나눈몫을 최대공약수와 곱해준다.

- m와 n중에 높은수롤 낮은수로 나눠서 나머지를 구해준다.

- m과n중에 낮은수를 나머지로 나눠준다.

4. 회고

두번째로 같은 문제를 풀었습니다. 이번 방법은 https://github.com/wholemann/daily_ps/blob/master/20200101/gcd-lcm.test.js의 방식대로 한번 따라 풀어 봤습니다.

```javascript
Array(n) //n 길이 만큼 array 생성.
```

```javascript
Array(n).fill() // 안에 있는 모든 데이터를 undefined로 바꾸기. 안바꾸면 데이터 수정등을 못한다.
```

``` javascript
Array(n).fill().map((_, i) => i + 1) // undefined의 데이터들을 index값에 비례하여 +1 한 값을 넣는다
```

``` javascript
  return Array(n).fill().map((_, i) => i + 1).filter(x => n % x === 0);// 1~...n값들 중에 n에서 나누면 0 인것들을 돌려준다. => 약수를 돌려준다.
```

```javascript
...commonDivisor(n)// n값의 약수 배열을 안에 있는 값들을 list 로 만듬
(...commonDivisor(n).filter(x => commonDivisor(m).includes(x))// 그 list에 있는 값들을 m의 약수 값들을 구한 배열에 있는 값들을 비교해서 같은 값들을 찾아준다.

return Math.max(...commonDivisor(n).filter(x => commonDivisor(m).includes(x)));//그 같은 값들의 값들중 제일 높은 값을 돌려준다.
```

```javascript
 return  [gcd(n, m), (n * m) / gcd(n, m)];// n,m의 최대공약수, 최대공약수로 구한 최소공배수를 돌려준다.
```

