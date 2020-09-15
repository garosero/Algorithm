function solution(baseball){
    var arr = new Array(988).fill(1);
    baseball.forEach(element => {
        let value = String(element[0]);
        let strike = element[1];
        let ball = element[2];

        for(let i=123;i<=987;i++){
            if(arr[i]===0) continue;
            let str = String(i);
            if(str[0] === str[1] || str[0] === str[2] || str[1] === str[2]){
                arr[i] = 0;
                continue;
            }
            if(str.indexOf('0') > -1){
                arr[i] = 0;
                continue;
            }

            //strike 조건 - 인덱스, 숫자 일치
            let match = str.split("").reduce((acc,cur,idx)=> {
                return cur === value[idx] ? acc+1 : acc;
            },0)
            if(match !== strike){
                arr[i] = 0;
                continue;
            }

            //ball 조건 - 인덱스 불일치, 숫자 일치
            let match2 = str.split("").reduce((acc,cur,idx)=>{
                const index = value.indexOf(cur);
                return index !== idx && index > -1 ? acc+1 : acc;
            },0);
            if(match2 !== ball){
                arr[i] = 0;
            }
        }    
        
    });
    
    return arr.filter((val,idx) => idx >= 123 && val !== 0).length;
    
}

console.log(solution([[123,1,1],[356,1,0],[327,2,0],[489,0,1]]));