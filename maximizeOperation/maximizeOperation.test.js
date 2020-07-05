const solution = (expression	) => {

    let operations = ["mul", "add", "sub"];
    let permutationOperations = perm(operations)
    let results = [];
    expression = expression.replace(/\*/g, "mul");
    expression = expression.replace(/\+/g, "add");
    expression = expression.replace(/\-/g, "sub");
    permutationOperations.forEach( operations => {
        let answer = expression.slice();
        operations.forEach(operator => {
            answer = calculate(operator, answer	,results)
        })
        results.push(answer);
    })
    results = results.map(numbers=> Math.abs(numbers));
    return Math.max(...results)
}

const calculate = (operator,expression) => {
    const re = new RegExp( `-?\\d\+${operator}-?\\d\+`, "i" )
    let found = expression.match(re);
    while(expression.match(re)) {
        found = expression.match(re);
        const result = found.map( x=> {
            x = x.split(operator);
            if(operator === "sub") {
                return Number(x[0]) - Number(x[1]);
            }
            if(operator === "add") {
                return Number(x[0]) + Number(x[1]);
            }
            if(operator === "mul") {
                return Number(x[0]) * Number(x[1]);
            }
        })
        expression = expression.replace(found[0],result[0])
    }
    return expression;
}




test('solution', () => {
    expect(solution("100-200*300-500+20")).toBe(60420);
});


function perm(xs) {
    let ret = [];
  
    for (let i = 0; i < xs.length; i = i + 1) {
      let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
  
      if(!rest.length) {
        ret.push([xs[i]])
      } else {
        for(let j = 0; j < rest.length; j = j + 1) {
          ret.push([xs[i]].concat(rest[j]))
        }
      }
    }
    return ret;
  }