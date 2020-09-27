var numIslands = function (grid) {
  let index = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];
  let island = 0;

  let visited = Array(grid.length);
  for (let i = 0; i < grid.length; i++) {
    visited[i] = Array(grid[0].length).fill(false);
  }

  let queue = [];

  for (let i = 0; i < grid.length; i++) {
    let flag = 0;
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        island += 1;
        queue = [[i, j]];
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }

  if (queue.length === 0) return 0;

  while (true) {
    let next = queue.shift();
    let a = next[0];
    let b = next[1];

    if (visited[a][b] === true && queue.length !== 0) continue;
    visited[a][b] = true;

    for (let i = 0; i < 4; i++) {
      if (
        a + index[i][0] > grid.length - 1 ||
        b + index[i][1] > grid[0].length - 1 ||
        a + index[i][0] < 0 ||
        b + index[i][1] < 0
      )
        continue;
      if (visited[a + index[i][0]][b + index[i][1]] === true) continue;
      if (grid[a + index[i][0]][b + index[i][1]] === "0") continue;
      queue.push([a + index[i][0], b + index[i][1]]);
    }

    if (queue.length === 0) {
      for (let i = 0; i < grid.length; i++) {
        let flag = 0;
        for (let j = 0; j < grid[i].length; j++) {
          if (grid[i][j] === "1" && visited[i][j] === false) {
            island += 1;
            queue.push([i, j]);
            flag = 1;
            break;
          }
        }
        if (flag === 1) break;
      }
      if (queue.length === 0) break;
    }
  }

  return island;
};

console.log(numIslands([["1", "0", "1", "1", "0", "1", "1"]]));