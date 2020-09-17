

function solution(user_id,banned_id){
    let list = [];
    String.prototype.replaceAll = function (org, dest) {
         return this.split(org).join(dest);
    };

    var answer = 0;
    let visited = Array(user_id.length).fill(false);

    DFS(user_id,banned_id,visited,0); //idx <- banned_id idx

    function DFS(user_id,banned_id,visited,idx){

      let visit = [...visited];
    
      console.log("인덱스 : "+idx);

      if(idx === banned_id.length){
          const temp = [];
          visit.forEach((v,i)=> v && temp.push(user_id[i])); //여태까지 지나온 애들만 push
          let cnt = 0;
          list.forEach(array => {
              console.log("list : "+array);
              let flag;
              for(let i=0;i<temp.length;i++){
                  flag = array.some(element => element === temp[i]); 
                  if(!flag) break;
              }
              //이번 길인 temp Array가 list안에 중복이 없다면 answer++;
              !flag && cnt++;
          });
          if(cnt === list.length){
              console.log("temp : "+temp);
              console.log("!!ANSwer 추가");
              list.push(temp);
              answer++; 
          }
          return;
      }

     
      let regex = RegExp(banned_id[idx].replaceAll("*", "."));

      const possibleStr = user_id.filter((val,index) => {
          return regex.test(val) && val.length === banned_id[idx].length && !visit[index]
      });

      console.log("possible : "+possibleStr);


      possibleStr.forEach(element => {
          console.log("ele : "+element);
          let checkIdx = user_id.findIndex(item => item === element);
          visit[checkIdx] = true;
          DFS(user_id,banned_id,visit,idx+1);
          visit[checkIdx] = false;
          
      });
      console.log("=============");
    }

    return answer;
    
}



console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "*rodo", "******", "******"]
  )
);