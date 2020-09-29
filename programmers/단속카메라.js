function solution(routes){
    //현재 카메라 경로에서 겹치는 부분으로 카메라 경로를 줄여감
    //겹치는 게 없다면 카메라 위치를 새로 갱신 
    var answer = 1;

    routes.sort((a,b)=>{
        return a[0] - b[0];
    });
    console.log(routes);
    let camera = routes[0];

    routes.forEach(route => {
        console.log("camera : "+camera);
        if(route[0] > camera[1]){
            //안겹침
            answer += 1;
            camera = route;
        }else{
            //겹친다면
            camera[0] = route[0];
            camera[1] = route[1] > camera[1] ? camera[1] : route[1];
            //진출지점에서는 더 작은 범위로 가기 위해 더 작은 범위로 만듦
        }
    })
    
    return answer;

}

function solution2(routes){
    //현재 카메라 위치에서 몇 개나 겹치나. 겹치는 게 없다면 카메라 위치 새로 갱신 
    var answer = 0;
    routes.sort((a,b)=>a[1]-b[1]); //진출기점으로 소트 
    console.log(routes);
    let checked = Array(routes.length).fill(0); //카메라를 만났는지의 체크 배열 
    let camera;

    for(let i=0;i<routes.length;i++){
        if(checked[i] === 0){
            camera = routes[i][1] //진출지점에 카메라 갱신 
            console.log("camera : " + camera + " i :" + i);
            answer += 1;
        }
        for(let j=i+1;j<routes.length;j++){
            //다음 차의 진입지점, 진출지점이 카메라 위치 사이이고 카메라 체크가 안되어있다면
            if(routes[j][0] <= camera && camera <= routes[j][1] && checked[j] === 0){
                checked[j] = 1;
                break;
            }
        }
    }

    return answer;
}

console.log(
  solution2([
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);