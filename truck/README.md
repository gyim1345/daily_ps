## 이해: 


bridge_length: 다리 길이 만큼 초가 걸린다.
weight: 다리의 최대 무게 건딜수 있는 
truck_weights: 트럭의 무게


## 계획:

대기 배열(truck_weights)를 하나씩 shift해서 새로운 onBridge 에 넣는다.
onBridge의 합이 weight 보다 작을때 까지 넣는다.
넣으면 bridgelength만큼 count를 올려주고 onBridge안에 있는 것들을 passedTruck 에 넣는다. 
truck_weight가 없어질때까지 돌린다.


## 회고: 

한국어는 어려워

어떤 과학자가 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 이 과학자의 H-Index입니다.

*hindex는 citation에서 찾는게 아니라 그냥 숫자에서 찾는거*

진심 개소리 하는것 같음.

모르면 질문하기에서 보고 하는것도 괜찮을듯.