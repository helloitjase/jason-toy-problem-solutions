var exist = function(board, word) {
  let wordExist = false;
  // debugger;
  const wordFinder = (x, y, index, builtWord, boardVersion) => {
    if (builtWord.length === word.length && builtWord !== word) {
      return;
    }
    
    if (wordExist === true) {
      return;
    }

    if (board[x][y] === word[index]) {
      boardVersion[x][y] = true;
      builtWord += word[index];
      index++;
      if (builtWord === word) {
        wordExist = true;
        return;
      }
    
      if (board[x + 1] !== undefined && wordExist === false) {
        wordFinder(x + 1, y, index, builtWord, boardVersion);
      }    
      if (board[x - 1] !== undefined && wordExist === false) {
        wordFinder(x - 1, y, index, builtWord, boardVersion);
      }
      if (board[x][y + 1] !== undefined && wordExist === false) {
        wordFinder(x, y + 1, index, builtWord, boardVersion);
      }
      if (board[x][y - 1] !== undefined && wordExist === false) {
        wordFinder(x, y - 1, index, builtWord, boardVersion);
      }
    }
  }


  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === word[0] && !wordExist) {
          wordFinder(i, j, 0, '', board);
        }
      }
  }    
  
  return wordExist;
};


const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

// console.log(exist(board, 'ABCCED') === true);
// console.log(exist(board, 'SEE') === true);
console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]], 'AAB') === true);