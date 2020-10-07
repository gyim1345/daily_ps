const solution = (blocks) => {
  const filledBlock = getfilledBlockWithGivenValue(blocks, blocks.length);
  const finalBlock = fillBlocks(filledBlock);
  return finalBlock;
}

const fillBlocks = (blocks) => {
  let queueBlock = [...blocks];
  while(isNotFilled(queueBlock)) {
    const newBlock = [];
   
    while(queueBlock[0]) {
      const index = queueBlock[0][0];
      let topBlock = queueBlock[0];
      let leftBlock = queueBlock.filter(block=> block[0] === index)[1];
      let rightBlock;
      if(leftBlock !== undefined) {
        if(queueBlock[1][0] === index+1) {
          rightBlock = queueBlock.filter(block=> block[0] === index+1)[1];
        } else {
          rightBlock = queueBlock.filter(block=> block[0] === index+1)[0];
        }
        fillBlock(topBlock, leftBlock, rightBlock)
      }
      
      newBlock.push(queueBlock.shift())
    }
    queueBlock = [...newBlock];
  }
  return queueBlock.map(x=> x[1]);
}

const isNotFilled = (block) => {
  const length = block.filter(x=> x[1] === undefined).length;
  if(length > 0) {
    return true;
  }
  return false;
}

const fillBlock= (topBlock, leftBlock, rightBlock) => {
  if(topBlock === undefined || leftBlock === undefined || rightBlock === undefined) {
    return;
  }
  const elements = [...topBlock, ...leftBlock, ...rightBlock];
  const undefinedCount = elements.filter(x=> x=== undefined).length;
  if(undefinedCount<2) {
    if(topBlock[1] === undefined) {
      topBlock[1] = leftBlock[1] + rightBlock[1];
    }

    if(leftBlock[1] === undefined) {
      leftBlock[1] = topBlock[1] - rightBlock[1];
    }

    if(rightBlock[1] === undefined) {
      rightBlock[1] = topBlock[1] - leftBlock[1];
    }
  }
  return;
}

const getfilledBlockWithGivenValue = (blocks, level) => {
  let newBlock = [];
  let blocksForEdit = [...blocks];
  for(let i = 0; i < level; i += 1) {
    let added = false;
    for(let j = 0; j < i+1; j += 1) {
      if(added === false) {
        if(blocksForEdit[0][0] === j) {
          added = true;
          newBlock.push([j,blocksForEdit[0][1]])
          blocksForEdit.shift();
          continue;
        }
      }
      newBlock.push([j,undefined]);
    }
  }
  return newBlock;
}

const getBlockCount = (depthLevel) => {
  let count = 0; 
  for(let i = 1; i<= depthLevel+1; i+= 1) {
    count += i;
  }
  return count;
}


test('solution', () => {
  expect(solution([[0, 50], [0, 22], [2, 10], [1, 4], [4, -13]])).toEqual([50, 22, 28, 4, 18, 10, 0, 4, 14, -4, 1, -1, 5, 9, -13]);  
  expect(solution([[0, 92], [1, 20], [2, 11], [1, -81], [3, 98]])).toEqual([92, 72, 20, 63, 9, 11, 144, -81, 90, -79, 217, -73, -8, 98, -177]);
});