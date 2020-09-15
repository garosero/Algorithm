var countCharacters = function(words,chars){
    var answer = 0;
    words.forEach(element => {
        let clone = [...chars];
        for(let i=0;i<element.length;i++){
            let idx = clone.indexOf(element[i]);
            if(idx > -1 ) clone.splice(idx,1);
       }

        if(clone.length + element.length === chars.length) answer+=element.length;
        console.log(clone);

    });

    return answer;
}

//Runtime : 360ms, 28.39%


// var countCharacters = function (words, chars) {
//   return words.reduce((acc, cur) => {
//     var char = [...chars];
//     return [...cur].every((x) => {
//       var idx = char.indexOf(x);
//       if (idx > -1) return (char[idx] = true);
//     })
//       ? acc + cur.length
//       : acc;
//   }, 0);
// };

//160ms, 71.61%
//every() - 배열의 모든 요소가 통과하는지. 모든 원소가 조건에 만족하면 true 하나라도 아니면 false리턴
console.log(countCharacters(["cat","bt","hat","tree"],"atach"));