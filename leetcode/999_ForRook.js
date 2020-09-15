var numRookCaptures = function (board) {
  var pawn = 0;
  var x, y; //rook의 위치
  var a, b;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        x = i;
        y = j;
      }
    }
  }
  /*1. [x,0] ~ [x, y-1]
      2. [x,y+1] ~ [x, 8]
      3. [0,y] ~ [x-1,y]
      4. [x+1,y] ~ [8,y]
    */
  var block = false; //안막힌 상태
  var minus = -1;
  var i = x;
  var j = y;
  while (true) {
    if (j === 0) {
      j = y;
      minus = -minus;
    }
    if (board[i][j] === "B") {
      if (j < y) {
        j = y;
        minus = -minus;
      } else break;
    }
    if (board[i][j] === "p") {
      pawn++;
      if (j < y) {
        j = y;
        minus = -minus;
      } else break;
    }

    j += minus;

    console.log(j);
    if (j === 8) break;
  }

  i = x;
  j = y;
  minus = -1;
  block = false;

  while (true) {
    if (i === 0) {
      i = x;
      minus = -minus;
    }
    if (board[i][j] === "B") {
      if (i < x) {
        i = x;
        minus = -minus;
      } else break;
    }
    if (board[i][j] === "p") {
      pawn++;
      if (i < x) {
        i = x;
        minus = -minus;
      } else break;
    }

    i += minus;

    console.log(i);
    if (i === 8) break;
  }

  return pawn;
};

console.log(
  "폰개수 : " +
    numRookCaptures([
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", "p", "p", "p", "p", "p", ".", "."],
      [".", "p", "p", "B", "p", "p", ".", "."],
      [".", "p", "B", "R", "B", "p", ".", "."],
      [".", "p", "p", "B", "p", "p", ".", "."],
      [".", "p", "p", "p", "p", "p", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
      [".", ".", ".", ".", ".", ".", ".", "."],
    ])
);