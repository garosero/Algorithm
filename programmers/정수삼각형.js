

// function solution(triangle){
//     var answer = 0;
//     const dp = Array(triangle.length);
//     console.log(dp);
//     dp[0] = [triangle[0][0]];
//     console.log(dp[0]);

//     for(let i=1;i<triangle.length;i++){
//         dp[i] = [];
//         // triangle[i].forEach((ele,idx) => {
          
//         //     if(idx === 0) dp[i].push(dp[i-1][0]+ele);
//         //     else if(idx === triangle[i].length-1) dp[i].push(dp[i-1][idx-1]+ele);
//         //     else {
//         //         console.log(triangle[i].length % 2);
//         //         triangle[i].length % 2 === 1
//         //           ? dp[i].push(dp[i - 1][idx - 1]+ele, dp[i - 1][idx]+ele)
//         //           : dp[i].push(
//         //               dp[i - 1][idx - 1] + ele,
//         //               dp[i - 1][idx] + ele,
//         //               dp[i - 1][idx + 1] + ele
//         //             );
//         //     }
//         console.log("i : "+i);
//         dp[i-1].forEach((ele,idx)=>{
           
//         })
            
//         console.log(dp[i]);
     
//     }
    
//     dp[triangle.length-1].sort((a,b)=>b-a);

//     return dp[triangle.length-1][0];
       
// }

function solution(triangle){
    for(let i=0;i<triangle.length-1;i++){
        for(let j=0;j<=triangle[i].length;j++){
            if(j===0) triangle[i+1][j] = triangle[i][j]+triangle[i+1][j];
            else if(j===triangle[i+1].length-1) triangle[i+1][j] = triangle[i][j-1]+triangle[i+1][j];
            else {
                triangle[i+1][j] = Math.max(triangle[i][j-1],triangle[i][j])+triangle[i+1][j];
            }
        }
    }

    triangle[triangle.length-1].sort((a,b)=>b-a);
    return triangle[triangle.length-1][0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]));