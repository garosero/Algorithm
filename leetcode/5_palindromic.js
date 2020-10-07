var palindromeCheck = function(s){
    for(let i=0;i<=Math.floor(s.length/2);i++){
        if(s[i]===s[s.length-1-i]) continue;
        else return false;
    }
    return true;
}

// var longestPalindrome = function(s){
//     let dp = [];
    
// }

// var longestPalindrome = function (s) {
//   let res = "";
//   let cur = "";
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < i + 2; j++) {
//       let left = i;
//       let right = j;
//       while (s[left] && s[left] === s[right]) {
//         cur = s.substring(left, right + 1);
//         if (cur.length > res.length) res = cur; //제일 긴 걸 선택해야됨. 
//         left--;
//         right++;
//         console.log("cur : "+cur+" res : "+res+" left : "+left+" right : "+right);
//       }
//     }
//   }
//   return res;
// };


var longestPalindrome = function(s){
    const dp = [];
    for(let i=1;i<=s.length;i++){
        dp[i] = [];
        for(let j=0;j<s.length;j++){
            if(j+i<=s.length) dp[i].push(s.substring(j,j+i));
        }
    }

    console.log(dp);

    for(let i=s.length;i>0;i--){
        for(let j=0;j<dp[i].length;j++){
            if(palindromeCheck(dp[i][j])) return dp[i][j];
        }
    }

}
console.log(longestPalindrome("a"));