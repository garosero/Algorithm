function bfs(search, target, words, count, result){
    let queue = []
    //형제부터 우선 탐색

    for(let i=0;i<words.length;i++){
        let unmatch = words[i].split("").reduce((acc,cur,idx) => {
            console.log(`cur : ${cur} / search[idx] : ${search[idx]} acc : ${acc}`)
            return cur !== search[idx] ? acc+1 : acc
        },0)

        console.log(`unmatch : ${unmatch}`)
        //search를 words중 하나로 바꿀 수 있는 경우
        if(unmatch === 1){
            if(target === words[i]){
                //바꾼글자가 target인 경우 result에 추가
                result.push(count+1);
            }

            let clone = words.slice();
            console.log(`clone : ${clone}`)
            clone.splice(1,i);
            queue.push({
                search : words[i],
                words : clone,
            })

        }
    }

    //이후 아래로 내려감
    if(queue.length){
        count++;
        for(let i=0; i<queue.length;i++){
            bfs(queue[i].search,target,queue[i].words,count,result);
        }
    }
}

function solution(begin,target,words){
    var result = [];
    //target으로 아예 바꿀 수 없는 경우
    if(words.findIndex(word=>word===target) >0){
        return 0
    }

    bfs(begin,target,words,0,result); 
    return Math.min.apply(null,result);
}

console.log(solution("hit","cog",["hot","dot","dog","lot","log","cog"]));

function solution(begin,target,words){
    //1.배열에 각각 begin-target까지의 cnt 저장 후 min return
    //2.처음 한개만 바뀔 수 있는 문자 체크
    //3.한개만 바뀔 수 있는 문자들에게 다시 바뀔 수 있는 문자들 큐에 넣기 
}