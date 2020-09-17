function network(n, computers) {
  const checked = Array(n).fill(false);
  let net = 1;
  let i = 0;
  while (true) {
    DFS(i, computers, checked);
    i = checked.findIndex((val) => val === false);
    if (i === -1) break;
    else net += 1;
  }

  function DFS(current, computers, checked) {
    checked[current] = true;

    let possibleDest = [];

    // let possibleDest = computers[turn].map((val,idx)=>{
    //     return val === 1 ? idx : undefined;
    // })
    for (let i = 0; i < computers[current].length; i++) {
      if (computers[current][i] === 1) {
        possibleDest.push(i);
      }
    }

    console.log(possibleDest);

    possibleDest.forEach((element) => {
      if (current === element) return; //자기 인덱스는 pass
      if (!checked[element]) {
        DFS(element, computers, checked);
      }
    });
  }
  return net;
}

console.log(
  network(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
