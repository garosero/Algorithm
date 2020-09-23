function solution(routes){
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

// function solution(routes) {
//   var answer = 0;

//   //우선 첫번째 경로로 세팅
//   let camera = [routes[0]];
//   routes.forEach((route, idx) => {
//     let flag = 0;

//     //진입지점, 진출지점 비교하여 겹친다면 더 작은 범위로 값 세팅
//     camera.forEach((cam) => {
//       if (cam === route) return;

//       //겹치는지 확인
//       if (cam[0] >= route[0]) {
//         if (cam[1] <= route[1]) flag = 1;
//         else {
//           if (route[1] >= cam[0]) {
//             flag = 1;
//             cam[1] = route[1];
//           }
//         }
//       } else {
//         if (cam[1] <= route[1]) {
//           flag = 1;
//           cam[0] = route[0];
//           cam[1] = route[1];
//         } else {
//           if (cam[1] >= route[0]) {
//             flag = 1;
//             cam[0] = route[0];
//           }
//         }
//       }
//     });

//     //겹치지않는다면 카메라에 푸시
//     if (flag === 0) camera.push(route);
//   });
//   return camera.length;
// }

console.log(
  solution([
    [-20, 15],
    [-14, -5],
    [-18, -13],
    [-5, -3],
  ])
);