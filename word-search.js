var exist = function(board, word) {
  let wordExist = false;
  // debugger;
  const wordFinder = (x, y, index) => {
    if (!wordExist) {
      if (x < 0 || y < 0 || x > board.length - 1 || y > board[0].length - 1) {
        return;
      }
      if (board[x][y] !== word[index]) {
        return;
      }
      if (index === word.length - 1) {
        wordExist = true;
        return;
      }
      board[x][y] = null;
      wordFinder(x + 1, y, index + 1);
      wordFinder(x - 1, y, index + 1);
      wordFinder(x, y + 1, index + 1);
      wordFinder(x, y - 1, index + 1);
      board[x][y] = word[index];

    }
  }


  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === word[0]) {
          wordFinder(i, j, 0);
          if (wordExist) {
            return wordExist;
          }
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