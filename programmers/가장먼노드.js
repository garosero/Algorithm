function solution(n,edge){
    var answer = 0;

    let mapList = new Map();
    edge.forEach(node => {
        const node1 = mapList.get(node[0]);
        const node2 = mapList.get(node[1]);

        if(node1 === undefined) mapList.set(node[0],[node[1]]);
        else node1.push(node[1]);
        if(node2 === undefined) mapList.set(node[1],[node[0]]);
        else node2.push(node[0]);
    })

    console.log(mapList);

    let distance = [-1];
    distance[1] = 0;
    let oneMove = mapList.get(1);
    let visited = [];
    visited[1] = 1;
    oneMove.map(val => {
        distance[val] = 1   //1의 인접 노드들은 미리 distance 1로 체크해둠
        visited[val] = 0;
    });
    let queue = [2,3]
    
    while(queue.length>0){
        console.log(queue);
        let node = queue.shift(); //queue.pop()으로 했어서 실패... 5,7,8,9 실패했었는데 이거 한 줄 바꾸니까 바로 됨 왜지?? 
        console.log("현재 노드 : "+node);
        if(visited[node] === 1) continue;  //큐에서의 중복만 안될뿐 연결된 노드에서는 중복체크 되지않음 
        else visited[node] = 1;
        let movePossible = mapList.get(node);
        movePossible.forEach(val => {
            console.log("val : "+val);
            if(distance[val] === undefined) distance[val] =  distance[node] + 1;
            else{
                console.log("또방문? => "+val);
                distance[val] = distance[node] + 1 < distance[val] ? distance[node]+1 : distance[val];
            }
         queue.push(val);
        })
        console.log("distance : "+distance);
    }

    console.log(distance);
    distance.sort((a,b)=>b-a);
    let i=1;
    let max = distance[0];
    answer = 1;

    return distance.filter(val => val === max).length;
}

console.log(
  solution(6, [
    
      [3, 6],
      [4, 3],
      [3, 2],
      [1, 3],
      [1, 2],
      [2, 4],
      [5, 2],
    
  ])
);