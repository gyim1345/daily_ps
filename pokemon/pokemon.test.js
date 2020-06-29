const solution = (nums) => {
    const noDuplicatePokemon = new Set(nums);
    const pokemonVarietyCount = noDuplicatePokemon.size;
    const pokemonCounts = nums.length;
    return pokemonVarietyCount > pokemonCounts/2 ? pokemonCounts/2 : pokemonVarietyCount;
}


test('solution', () => {
    expect(solution([3,1,2,3])).toBe(2);
});