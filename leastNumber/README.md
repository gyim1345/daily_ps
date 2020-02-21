이해: 

A 와 B 숫자가 담겨있는 배열이다.

A와 B 의 원소들을 한번씩 사용한다는 전제하에 곱해서 합의 제일 최소값을 만들어서 반환

계획:

배열을 새로 만들어서 각 곱한 값들의 합을 저장한다. 
array[0] = array[0] + a[0] * b[1]  
array[1] = array[1] + a[1] * b[2]  
array[2] = array[2] + a[2] * b[0]  

array[0] = array[0] + a[1] * b[2]
array[1] = array[1] + a[2] * b[0]
array[2] = array[2] + a[0] * b[1]

array[0] = array[0] + a[2] * b[0]
array[1] = array[1] + a[0] * b[1]
array[2] = array[2] + a[1] * b[2]


01 12 20
