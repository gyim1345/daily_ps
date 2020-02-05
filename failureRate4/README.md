이해:  
N: 스테이지 수  
stage: 사용자들이 도달한 스테이지 숫자 배열  
result: 실패율을 내림차순으로 정렬한 배열  
실패율: 스테이지에 도달했으나 아직 클리어하지 못한  플레이어의 수 / 스테이지에 도달한 플레이어 수  
N 을 넘어간 사용자들의 실패율은 기록 안함.  
현제 스테이지에 머물고 있는 사용자가 없을 경우 0  
실패율이 같다면 스테이지별 오름차순으로 정렬

계획:  

result를 담을 스테이지별 배율을 만듬.  
스테이지별 실패율을 계산  
스테이지별 실패율을 넣음  
스테이지별 넣은 실패율을 내림 차순으로 정렬.  
정렬하면서 실패율이 같다면 정렬을 스테이지 오름차순으로  

실행

회고

https://programmers.co.kr/learn/courses/30/lessons/42889  
문제를 풀이법 

<https://github.com/wholemann/daily-coding-dojo/blob/master/20200131/failurerate.test.js>  
를 안보고 비슷하게 풀려고 했다.

중간에 두번 봤다.  

맵에서 객체 만드는 방법

.map(currentStage => ({stage: currentStage, failRate: failureRate(currentStage,stages)}))

소괄호 안에 중괄호를 넣어야한다.  
나는 중괄호만 넣고 할려고 했다.

객체의 원하는 속성만 빼오기

.map(stageInfos => stageInfos.stage)
}

내가 원하는 stage라는 속성을 저렇게 빼온다.  

사실 본 이유는 생각하기 귀찮아서 그랬다 반성해라.

반성하자.
