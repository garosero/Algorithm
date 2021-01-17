function solution(clothes){
    
    const clothMap = new Map();
    let answer = 1;

    clothes.forEach(element => {
        const getValue = clothMap.get(element[1]);
        if(getValue) clothMap.set(element[1],getValue+1);
        else clothMap.set(element[1],1);
    })

    for (const element of clothMap) {
        answer *= element[1]+1;
    }

    return answer-1;
    
}

const example = [
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

console.log(solution(example));