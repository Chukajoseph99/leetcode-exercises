
function isValidSudoku(board){
    for(let i = 0; i < board.length; i++){
      let set = new Set();
      for(let j = 0; j < board.length; j++){
          let cell = board[i][j];
          if (cell === ".") {
              continue;
          }
          if (set.has(cell)) {
              return false;
          }
          set.add(cell);
      }
    }
  
    for(let i = 0; i < board.length; i++){
      let set = new Set();
      for(let j = 0; j < board.length; j++){
          let cell = board[j][i];
          if (cell === ".") {
              continue;
          }
          if (set.has(cell)) {
              return false;
          }
          set.add(cell);
      }
    } 
    
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
          let set = new Set();
          for(let k = 0; k < 3; k++){
              for(let l = 0; l < 3; l++){
                  let cell = board[3 * i + k][3 * j + l];
                  if (cell === ".") {
                      continue;
                  }
                  if (set.has(cell)) {
                      return false;
                  }
                  set.add(cell);
              }
             } 
            }
          }
          return true;
      }
    