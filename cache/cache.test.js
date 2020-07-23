// count를 만들고 캐시라는 배열을 만들고 도시이름 배열의 문자열을 모두 대문자로 바꾸고 하나씩 가져오면서 캐시크기 만큼 넣는다.
// 만약 넣을 문자열이 캐시에 없으면 5 있으면 1을 증가시키는 조건을 정해주고 

// 배열이 다 찼으면 최근에 제일 사용되지 않은 도시를 뽑고 방금 조회한 도시를 뒤에다가 넣는다.

// 도시이름들을 다 조회했다면 count를 return 한다.

const solution = (cacheSize, cities) => {
    let count = 0;
    let cache = [];
    cities = cities.map(e => e.toUpperCase());
    for (let i = 0; i < cities.length; i++) {
    
        //cache에 cities[i]가 있으면  count +1 cache 에 있는 cities[i]를 slice하고 뒤에다가 붙여준다.\
        if(cache.includes(cities[i])) {
            count += 1;
            cache.splice(cache.indexOf(cities[i]),1);
            cache.push(cities[i]);
        } else {
            //cache에 cities[i]가 없으면 count +5를 해준다. 
            count += 5;
            if(cache.length === cacheSize) {
                cache.shift();
            }
            if(cache.length+1 <= cacheSize) {
                cache.push(cities[i]);
            }
            
            //cache 가 다 차있으면 shift하고 push를 해준다
            //cache 가 다 차있지 않다면 push 만 해준다.
        }      
    }
    return count;
}


test('solution', () => {
    // expect(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])).toBe(50);
    // expect(solution(3, ["Jeju", "Pangyo", "Seoul","Jeju", "Pangyo", "Seoul","Jeju", "Pangyo", "Seoul" ])).toBe(21);
    expect(solution(0, ["Jeju", "Pangyo","Jeju","Pangyo","seoul","pangyo" ])).toBe(30);
});