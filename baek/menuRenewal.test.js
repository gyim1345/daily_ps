const solution = (orders, course) => {

  let menus = {};
  orders.forEach(order => { 

    const combinationMenus = combinations(order.split('')).filter(x=> course.includes(x.length));

    combinationMenus.forEach(menu => {
      const string = menu.sort().join('');
      if(menus[string]) {
        menus[string][0] += 1;
        return;
      }
      menus[string] = [1,string];
    })
  })
  
  const arrMenu = Object.values(menus);
  arrMenu.sort((a,b) => {
    if(a[0] === b[0]) {
      return b[1].length - a[1].length;
    }
    return b[0]- a[0]
  })

  let array = [];
  let obj = {}
  let max = arrMenu[0][0];
  let maxStringLength = arrMenu[0][1].length;
  for(let i = 0; i < arrMenu.length; i++) {
    if(arrMenu[i][0] < 2) {
      break;
    }
    if(arrMenu[i][0] === max && arrMenu[i][1].length === maxStringLength) {
      obj[arrMenu[i][1].length] = true;
      array.push(arrMenu[i][1]);
      continue;
    }
    if(arrMenu[i][1].length !== maxStringLength && !obj[arrMenu[i][1].length]) {
      obj[arrMenu[i][1].length] = true;
      max = arrMenu[i][0]
      maxStringLength = arrMenu[i][1].length
      array.push(arrMenu[i][1]);
    }
  }
  return array.sort();
}



function combinations(array) {
  let lists = [];
  let length = 1 << array.length;
  for (let i = 1  ; i < length; ++i) {
      let tempList = array.filter((v, index) => {
          return i >> index & 1 
      });
      lists.push(tempList);
  }
  return lists;
}


  test('solution', () => {
    expect(solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])).toEqual(["AC", "ACDE", "BCFG", "CDE"]);
    expect(solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2,3,5])).toEqual(["ACD", "AD", "ADE", "CD", "XYZ"]);
    expect(solution(["XYZ", "XWY", "WXA"], [2,3,4])).toEqual(["WX", "XY"]);
  });