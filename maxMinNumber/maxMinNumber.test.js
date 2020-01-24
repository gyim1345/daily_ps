const maxMinNumber = (string) => {
    return min(string)+ " " + max(string);
}

const min = (string) => {
    return  Math.min(...string.split(" ")).toString()
}

const max = (string) => {
    return Math.max(...string.split(" ")).toString()
}

test('max', () => {
    expect(max("1 2 3 4")).toBe("4");
    expect(max("-1 -2 -3 -4")).toBe("-1");
    expect(max("-1 -1")).toBe("-1");
})

test('min', () => {
    expect(min("1 2 3 4")).toBe("1");
    expect(min("-1 -2 -3 -4")).toBe("-4");
    expect(min("-1 -1")).toBe("-1");
})

test('maxMinNumber' , () => {
    expect(maxMinNumber("1 2 3 4")).toBe("1 4");
    expect(maxMinNumber("-1 -2 -3 -4")).toBe("-4 -1");
    expect(maxMinNumber("-1 -1")).toBe("-1 -1");
})