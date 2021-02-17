-- 코드를 입력하세요

set @hour := -1;

select 
  @hour := @hour + 1 as HOUR,
  (select COUNT(*) from ANIMAL_OUTS where HOUR(DATETIME) = @hour) as COUNT
FROM 
  ANIMAL_OUTS
GROUP BY
  HOUR HAVING HOUR < 24

-- ---------------------

SET @hour := -1; 

SELECT (@hour := @hour + 1) as HOUR,
(SELECT COUNT(DATETIME) FROM ANIMAL_OUTS WHERE HOUR(DATETIME) = @hour) as COUNT
FROM ANIMAL_OUTS
WHERE @hour < 23

-- https://programmers.co.kr/learn/courses/30/lessons/59413