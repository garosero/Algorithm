// function solution(s) {
//   var answer = s.length; //최소 문자는 s의 길이

//   for (let i = 1; i <= s.length / 2 + 1; i++) {
//     const arr = [];
//     let strA = s.slice(0, i); //0
//     let strB = s.slice(i, i + i); //1 ~ 1
//     if (strA !== strB) continue;
//     let cnt = 1;
//     for (let j = i; j < s.length; j = j + i) {
//       strB = s.slice(j, j + i); //여기서 끝나버림
//       console.log("strA : " + strA);
//       console.log("strB : " + strB);

//       if (strA === strB) cnt += 1;
//       else {
//         //다르다면
//         cnt === 1 ? arr.push(strA) : arr.push(cnt + strA);
//         strA = strB;
//         cnt = 1;
//       }
//     }
//     if (strA === strB) cnt === 1 ? arr.push(strA) : arr.push(cnt + strA);
//     else arr.push(strB); //달랐다면...
//     console.log("arr : "+arr);
//     const toStr = arr.join("");
//     console.log("단위 : "+i+" 길이 : "+toStr.length);
//     if (answer >= toStr.length) answer = toStr.length;
//   }

//   return answer;
// }

// console.log(solution("abcabcabcabcdededededede"));

// //11, 19, 22, 26, 27, 28 실패



function solution(s) {
  var answer = s.length; //최소 문자는 s의 길이
  if(s.length === 1) return 1; //이거 체크 안해줘서 5번 테케 런타임 에러
  for (let i = 1; i <= s.length / 2 + 1; i++) {
    const arr = [];
    let strA = s.slice(0, i); //0
    let cnt = 1;
    for (let j = i; j < s.length; j = j + i) {
      strB = s.slice(j, j + i); 
      if (strA === strB) cnt += 1;
      else {
        //다르다면
        cnt === 1 ? arr.push(strA) : arr.push(cnt + strA);
        strA = strB;
        cnt = 1;
      }
    }
    if (strA === strB) cnt === 1 ? arr.push(strA) : arr.push(cnt + strA);
    else arr.push(strB); //달랐다면...
    const toStr = arr.join("");
    console.log("단위 : "+i+" 길이 : "+toStr.length);
    if (answer >= toStr.length) answer = toStr.length;
  }

  return answer;
}

console.log(solution("abcabcabcabcdededededede"));


