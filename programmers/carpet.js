function solution(brown,yellow){
    var answer = [];
    var x,y;
    var need;
    for(let i=3;i<(brown+yellow)/2;i++){
       if((brown+yellow) % i === 0){
           //나눠진다면 여기서부터 brown이 외곽 1줄이 되는지 체크
            x = (brown + yellow) / i; //가로
            y = i; //세로

            //필요한 brown 개수
            need = 2  * (x + y) - 4;
            if(brown === need){
                answer.push(x,y);
                break;
            }
       } 
    }

    return answer;
}

console.log(solution(24,24));