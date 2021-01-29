function solution(s){
    var answer = [];

    const tupleMap = new Map();

    const arr = s.replace('{{','').replace('}}','').split(",");
    for (let element of arr) {
        element = element.replace('}','').replace('{','');
        const getValue = tupleMap.get(element);
        if(getValue) tupleMap.set(element,getValue+1);
        else tupleMap.set(element,1); 
        
    }
    
   const sort = [...tupleMap.entries()].sort((a,b)=>b[1]-a[1]);
   
   for (const element of sort) {
       console.log(element);
       answer.push(Number(element[0]));
   }

   return answer;

}

const example = "{{20,111},{111}}";
console.log(solution(example));