function solution(begin, target, words){
    var answer = 999999999;
    const stack = [];
    let depth = 0;

    function dfs(stack,word,depth){
        console.log("stack : "+stack);
        console.log("word : "+word);
        console.log("depth : "+depth);
        depth += 1;

        //break : 모든 단어를 다 방문
        if(stack.length === words.length) return;


        let possibleRoute = [];
        //갈 수 있는 단어들을 거른다.
        for (const ele of words) {
              let cnt = 0;
              for (let i = 0; i < ele.length; i++) {
                if (ele[i] === word[i]) cnt++;
              }
              if (cnt === ele.length - 1) {
                //이미 방문했던 단어는 X
                if (stack.find(val=>val === ele)) continue;
                possibleRoute.push(ele);
              }
        }


        //걸러진 단어들을 순회한다.
        possibleRoute.forEach(val =>{
            if(val === target){
                answer = Math.min(answer,depth);
                return;
            }else{
                stack.push(val);
                dfs(stack,val,depth);
            }
        })
        
    }

    dfs(stack,begin,depth);
    return answer;

      
    
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));