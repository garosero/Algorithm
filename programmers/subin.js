//멀리 뛰기

function running(n){
    var answer = 1;
    if(n === 0) return 0;
    let k = n / 2; //2의 개수 
    for(let i=1;i<=k;i++){
        //i = 2의 개수 2의 개수가 하나일 때의 조합
        let numOne = n - 2 * i; //1의 개수
        if(numOne === 0) answer += 1;
        else answer += Math.floor(factorial(numOne+i) / (factorial(i) * factorial(numOne))) % 1234567;
        //중복되는 1의 개수 * 중복되는 2의 개수를 n!에서 나눈다. 
        console.log("answer : "+answer);
    }

    return answer;
    //1,1,1.. 전부 1인 경우 하나 추가 
}

function factorial(n){
    let result=1;
    for(let i=2;i<=n;i++){
        result *= i;
    }

    return result;
  
}

function solution(n) {
  var answer = 0;
  let dp = [1, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

// function factorial(n) {
//   function cal(n, result) {
//     return n === 0 ? result : cal(n - 1, n * result);
//   }

//   return cal(n, 1);
// }
//http://www.thinkingincrowd.me/2016/06/06/How-to-avoid-Stack-overflow-error-on-recursive/

//console.log(running(130));

//여행경로
// function travel(tickets){
//     var answer = [];
//     tickets.sort();
//     console.log("tickets : "+tickets);
//     let done = false;
//     dfs('ICN',tickets,[]);

//     function dfs(departure, remain, route){
//         if (done) return;
//         const possibleTickets = remain.filter(item => item[0] === departure);
//         console.log("possible : "+possibleTickets);
//         possibleTickets.forEach(possibleTkt => {
//             let tmp_remain = Array.from(remain);
//             let tmp_route = Array.from(route);
//             console.log("tmp_remain : "+tmp_remain);
//             console.log("tmp_route : "+tmp_route);

//             const idx = tmp_remain.findIndex(item => {
//                 console.log("item : "+item);
//                 return item === possibleTkt});
//             console.log("idx : "+idx);
//             tmp_remain.splice(idx,1);
//             console.log("삭제 후 :"+tmp_remain);
//             if(tmp_route.length === tickets.length -1){
//                 tmp_route = tmp_route.concat(possibleTkt)
//                 done = true;
//                 answer = tmp_route
//             }else {
//                 tmp_route.push(possibleTkt[0])
//                 console.log("---------------");
//                 dfs(possibleTkt[1],tmp_remain,tmp_route)
//             }
//         })
//     }
//     return answer;
// }

function travel(tickets){
    let answer = [];
    let end = false;
    dfs('ICN',tickets,[],tickets);

    function dfs(departure, remain, routes, tickets) {

      if (end) return;
      console.log("departure : " + departure);
      let destination = [];
      
     
      for (let i = 0; i < remain.length; i++) {
        if (remain[i][0] === departure) {
          destination.push(remain[i]);
     
        }
      }
      // console.log("remain : "+remain[0][0]);
      // console.log("departure : "+departure);
      //const destination = remain.filter(item => item[0] === departure);
       console.log("destination : " + destination); 
      destination.sort();
      destination.forEach((dest) => {
        let copy_tickets = remain.slice();
        let copy_routes = routes.slice();
         copy_routes.push(departure);
        console.log("departure : "+departure);
        //visit 체크를 위해 copy_tickets에서 뺀다
        let findIdx = copy_tickets.findIndex((val) => val === dest);
        console.log("dest: " + dest);
        copy_tickets.splice(findIdx, 1);
        console.log("tickets : " + copy_tickets);
        console.log("routes : " + copy_routes);
        console.log("---------");
        if (copy_routes.length === tickets.length) {
          //console.log("last!!! answer : "+answer);
          console.log("ticket len : " + tickets.length);
          console.log("!!!!!!!!!!!!!!!!");
          
          copy_routes.push(dest[1]);
          answer = copy_routes;
          console.log("answer:" + answer);
          end = true;
          return;
        } else {
          dfs(dest[1], copy_tickets, copy_routes, tickets);
        }
      });
    }
    return answer;
};



console.log(
  travel([
    ["ICN", "A"],
    ["ICN", "B"],
    ["B", "ICN"],
  ])
);

//가장 큰 정사각형 찾기
function square(board){
    var answer = 0;

    if(board[0].length < 2 || board.length < 2) return 1;

    for(let i=1;i<board.length;i++){
        for(let j=1;j<board[0].length;j++){
            if(board[i][j]>0){
                //0이 아니라면 해당 칸의 최대 크기 구하기
                let min = Math.min(board[i][j-1],board[i-1][j-1],board[i-1][j]);
                board[i][j] = min+1;
            }
            if(answer < board[i][j]) answer = board[i][j]
        }
    }
    return answer * answer;
}

// console.log(
//   square([
//     [0, 1, 1, 1],
//     [1, 1, 1, 0],
//     [1, 1, 1, 1],
//     [0, 0, 1, 0]
//   ])
// );

//n진수 게임
function solution(n,t,m,p){
  let arr = [];
  for(let i=0;i<t*m;i++){
    let num = change(n,i).split('');
    arr = arr.concat(num);
  }

  //튜브가 말해야하는 마지막 정답 index : p + m * (t-1)
  let answer = '';
  for(let i=0;i<t;i++){
    let turn = p-1 + m * i;
    answer += arr[turn];
  }
  console.log(answer);
  
}

function change(n,num){
  let current = '';
  let six = ['A','B','C','D','E','F']; //10~15
  while(num>=n){
    let a = num % n;
    if(n === 16){
      if(a>9){
         a = String(a);
         current = six[Number(a.charAt(a.length-1))]+current;
         console.log("cur : "+current);
      }
      else current = String(a)+current
    }else{
      current = String(a)+current;
    }
     
    num = Math.floor(num / n);
  }
  return String(num)+current;
}

//console.log(solution(16,16,2,1));

