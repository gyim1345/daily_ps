const solution = (new_id) => {

    let changed = true;
    let answer = new_id;
    while(changed) {
        changed = false;
        let currentString = answer;
        
        currentString = currentString.toLowerCase();
        if(currentString !== answer) {
            answer = currentString;
            changed = true;
            continue;
        }
        
        currentString = currentString.replace((/[^_.-\d\w]/g), '');
        if(currentString !== answer) {
            answer = currentString;
            changed = true;
            continue;
        }

        currentString = currentString.replace(/[.]+/g, '.');
        if(currentString !== answer) {
            answer = currentString;
            changed = true;
            continue;
        }

        if(currentString[0] === '.') {
            answer = currentString.substring(1);
            changed = true;
            continue;
        }

        if(currentString[currentString.length-1] === '.') {
            answer = currentString.substring(0,currentString.length-1);
            changed = true;
            continue;
        }

        if(currentString.length === 0) {
            currentString = 'a';
            answer = 'a';
        }

        if(currentString.length > 15) {
            answer = currentString.substring(0,15);
            changed = true;
            continue;
        }

        if(currentString.length < 3) {
            answer = currentString.padEnd(3, currentString[currentString.length-1]);
            break;
        }
    }
    return answer;
};



test('solution', () => {
  expect(solution('...!@BaT#*..y.abcdefghijklm....')).toBe('bat.y.abcdefghi');
  expect(solution('z-+.^.')).toBe('z--');
  expect(solution('=.=')).toBe('aaa');
  expect(solution('123_.def')).toBe('123_.def');
  expect(solution('abcdefghijklmn.p')).toBe('abcdefghijklmn');
});