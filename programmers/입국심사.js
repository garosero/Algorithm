// function solution(n, times) {
//   var answer = 0;
//   let left = 1;
//   let right = times[times.length - 1] * n; //times가 정렬되어있다면

//   let flagLeft = 0;
//   let flagRight = 0;
//   while (true) {
//     let mid = Math.floor((left + right) / 2);
//     let value = times.reduce((acc, cur) => {
//       return acc + Math.floor(mid / cur);
//     }, 0);

//     if (value === n - 1) flagLeft = mid;
//     if (value === n + 1) flagRight = mid;
//     if (flagLeft > 0 || flagRight > 0) break;

//     if (value <= n) left = mid + 1;
//     else right = mid - 1;
//   }

//   if (flagLeft > 0) {
//     for (let i = flagLeft; i < times[times.length - 1]; i++) {
//       let value = times.reduce((acc, cur) => {
//         return acc + Math.floor(i / cur);
//       }, 0);
//       if (value === n) {
//         answer = i;
//         break;
//       }
//     }
//   } else {
//     for (let i = flagRight; i > 0; i--) {
//       let value = times.reduce((acc, cur) => {
//         return acc + Math.floor(i / cur);
//       }, 0);

//       if (value < n) break;
//       else answer = i;
//     }
//   }

//   return answer;
// }


// function solution(n, times) {
//   var answer = 0;
//   let left = 1;
//   let right = times[times.length - 1] * n; //times가 정렬되어있다면

//   while (true) {
//     let mid = Math.floor((left + right) / 2);
//     let value = times.reduce((acc, cur) => {
//       return acc + Math.floor(mid / cur);
//     }, 0);
    
//     //target : n-1
//     if(value === n-1){
//         answer = mid;
//         console.log("mid : "+mid);
//         break;
//     }else if(value < n-1) left = mid + 1;
//     else right = mid - 1;  
//   }

//   while(true){
//       answer += 1;
//       let value = times.reduce((acc,cur)=>{
//           return acc + Math.floor(answer / cur);
//       },0);
//       if(value === n) break;
//   }

//   return answer;
// }

// var floor = n => Math.floor(n);

// function solution(n, times){
//     var answer = 0;

//     return s(n,times);
// }

// function s(n,times){
//     var min = 0;
//     var max = n * Math.max.apply(null,times);
//     while(min <= max){
//         var mid = floor((min+max)/2);
//         var MaxInMid = times.reduce((acc,cur)=>acc+=)
//     }
// }


function solution(n, times) {
  let left = 1;
  let right = times[times.length - 1] * n; //times가 정렬되어있다면
  
  while (left <= right) {
    console.log('right : '+right);
    let mid = Math.floor((left + right) / 2);
    let value = times.reduce((acc, cur) => {
      return acc + Math.floor(mid / cur);
    }, 0);
    
    if (value < n) left = mid + 1;
    else right = mid - 1;
  }

  return left;
}

console.log(solution(6,[7,10]));