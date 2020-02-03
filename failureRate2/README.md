https://programmers.co.kr/learn/courses/30/lessons/42889


이해  
N: 스테이지 수  
stages: 사람들 마다 최종 도달 스테이지 배열  
result: 실패율 내림차순  
실패율: 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수  

계획  
result를 담을 새로운 배열을 만든다.  
스테이지별 실패율을 구한다.  
result 배열에 스테이지별 실패율을 담는다.  
result를 실패율에 따라 스테이지 별 sorting을 한다.