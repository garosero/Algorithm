function solution(numbers,target){
    //true = + / false = -
    const flag = new Array(numbers.length).fill(false);
    let sum=0;
    var answer = 0;

    const dfs = (depth) =>{
        if(depth === numbers.length){
            console.log("depth : "+depth);
            flag.forEach((val,idx)=>{
                console.log("val : "+val+" number : "+numbers[idx]);
                if(val) sum += numbers[idx];
                else sum -= numbers[idx];
            })
            console.log("sum : "+sum);
            if(sum === target){
                console.log("answer : "+answer);
                 answer +=1;
            }
            sum = 0;
            return;    
        }

        //+일때
        flag[depth] = true;
        dfs(depth+1);

        flag[depth] = false;
        dfs(depth+1);
    }
    dfs(0);

    return answer;
}

console.log(solution([1,1,1,1,1],3));