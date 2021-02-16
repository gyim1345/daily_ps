SELECT
  I.NAME,
  I.DATETIME
FROM
  ANIMAL_INS I
LEFT OUTER JOIN
  ANIMAL_OUTS O
ON
  I.ANIMAL_ID = O.ANIMAL_ID
WHERE
  O.ANIMAL_ID is null
Order by
  I.DATETIME asc
LIMIT
  3

-- https://programmers.co.kr/learn/courses/30/lessons/59044