
const example = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];

// const example = [
//   ["a","b","c"],
//   ["1","b","c"],
//   ["a","b","4"],
//   ["a","5","c"]
// ]

// const example = [
//   ["a","1","4"],
//   ["2","1","5"],
//   ["3","2","4"]
// ]

//멱집합 구하기
const powerSet = (arr) => {
  let flag = new Array(arr.length).fill(false); //[false, false, false, false]
  const subSets = []; //100, ryan, [100,ryan]...

  const dfs = (depth) => {
    if(depth === arr.length){
      const check = arr.filter((val,idx)=>flag[idx]); //flag[0], flag[3]이 true면 [arr[0],arr[3]] return
      if(check.length ===0 ) return; //빈 배열이면 패스
      subSets.push(check); //부분집합에 추가
      return;
    }

    //true값(포함될 때) - 왼쪽트리
    flag[depth] = true;
    dfs(depth+1);

    //오른쪽 트리
    flag[depth] = false;
    dfs(depth+1); 
  }
  dfs(0);
  return subSets;
}

function solution(relation){
  //1.멱집합을 구한다.
  //2. 유일성 구하기

  let input = new Array(relation[0].length).fill(0).map((val,idx)=>idx);
  console.log("input : "+input);
  const getSubSet = powerSet(input); //[[0],[0,1],[0,1,3]]...
  const willRemove = [];
  let oneFlag = true;

  //유일 식별되는지 체크. 
  getSubSet.forEach(element => {
    //element : [0,1]... relation[0][0]+relation[0][1]
    const onlyOne = new Set();    //<--이걸 밖에다 둬서 틀렸었다....
    for(let i=relation.length-1;i>=0;i--){ //row의 크기 
      console.log("i : "+i);
      const stringComb = element.reduce((prev,cur)=>{
        return prev+relation[i][cur];  //해당 인덱스 문자로 합치기
      },''); //100ryan, 100ryanmusic
      console.log(stringComb);
      if(onlyOne.has(stringComb)){  //문자로 합친것에 포함되어있다면 
         oneFlag = false;
         break; //유일하지않다면 이 부분집합은 break (이미 set에 있다면)
      }else onlyOne.add(stringComb); //set에 없다면 추가
      
    }
   if(oneFlag === false){
      willRemove.push(element); //삭제해야될 것에 추가
      oneFlag = true;
   }
  });

  willRemove.forEach(element=>{
    getSubSet.splice(getSubSet.indexOf(element),1);
    //유일하지않은 element값 찾아서 삭제
  }) 

  //여기까지 유일성 충족
  //최소성은 length가 가장 작은 것만 두고 포함된 다른 것들 모두 삭제 
  getSubSet.sort((a,b)=>a.length - b.length); //length순으로 오름차순정렬
  console.log(getSubSet);

  const minimalSet = [];
  for (const element of getSubSet) {
    let flag = false;
    for (const val of minimalSet) {
       if (val.every((cur) => element.includes(cur))) {
         flag = true; //val이 모두 element에 포함되어있다면 최소성x
         break;
       }
    }
    if(flag===false) minimalSet.push(element);
  }

  console.log(minimalSet);
  return minimalSet.length;
 
}

console.log(solution(example));