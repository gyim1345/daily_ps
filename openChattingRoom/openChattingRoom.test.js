const solution = (record) => {

    let hashTable = {};
    let histories = [];
    record.forEach(line => {
        const [command, id, nickname] = line.split(' ');
        if (command === "Enter") {
            hashTable[id] = nickname;
            histories.push([id, "님이 들어왔습니다."]);
        }
        if (command === "Leave") {
            histories.push([id, "님이 나갔습니다."]);
        }
        if (command === "Change") {
            hashTable[id] = nickname;
        }
    });

    histories = histories.map(history => {
        return history.map((words,i) => {
            if(i === 0) {
                return hashTable[words];
            }
            return words
        }).join("")
    })
    return histories;
}


const solution = (records) => {
    const answer = [];
    const map = new Map();
  
    records.map(record => {
      const [ type, id, nickname ] = record.split(' ');
      if (type === 'Enter' || type === 'Change') map.set(id, nickname);
      if (type === 'Enter' || type === 'Leave') answer.push({ id, type });
    });
  
    return answer.map(item => {
      switch (item.type) {
        case 'Enter':
          return `${map.get(item.id)}님이 들어왔습니다.`;
          break;
        case 'Leave':
          return `${map.get(item.id)}님이 나갔습니다.`;
          break;
      }
    });
  };
  
test('solution', () => {
    expect(solution(
        [
            "Enter uid1234 Muzi",
            "Enter uid4567 Prodo",
            "Leave uid1234",
            "Enter uid1234 Prodo",
            "Change uid4567 Ryan"
        ]
    )).toEqual(
        [
            "Prodo님이 들어왔습니다.",
            "Ryan님이 들어왔습니다.",
            "Prodo님이 나갔습니다.",
            "Prodo님이 들어왔습니다."
        ]
    );
});