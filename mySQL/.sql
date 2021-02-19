SELECT
  ANIMAL_ID,
  NAME,
  IF(SEX_UPON_INTAKE LIKE 'Neutered%' OR SEX_UPON_INTAKE LIKE 'Spayed%', 'O', 'X') as 중성화
FROM
  ANIMAL_INS
https://programmers.co.kr/learn/courses/30/lessons/59409

SELECT 
  ANIMAL_TYPE,
  IFNULL(NAME, 'No name') as NAME,
  SEX_UPON_INTAKE
FROM
  ANIMAL_INS
order by ANIMAL_ID
https://programmers.co.kr/learn/courses/30/lessons/59410

SELECT
  ANIMAL_ID,
  NAME,
  DATE_FORMAT(DATETIME, '%Y-%m-%d')
from
  ANIMAL_INS
order by
  ANIMAL_ID
https://programmers.co.kr/learn/courses/30/lessons/59414