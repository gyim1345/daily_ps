SELECT 
  CART_ID
from
 CART_PRODUCTS
where
  NAME = 'Milk' OR NAME = 'Yogurt'
group by
  CART_ID
having
  count(DISTINCT NAME) >= 2

https://programmers.co.kr/learn/courses/30/lessons/62284