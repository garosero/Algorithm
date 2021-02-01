function solution(genres, plays){
    var answer = [];

    //1. genre를 map에 넣고 횟수 소팅
    const genreMap = new Map();
    for (const element of genres) {
        const val = genreMap.get(element);
        const play = plays
          .filter((val, idx) => genres[idx] === element)
          .reduce((acc, cur) => acc + cur, 0);
        if (val) continue;
        else genreMap.set(element, play);
    }

    const sortedGenre = [...genreMap.entries()].sort((a,b)=> b[1] - a[1]); //[['classic',3], ['pop',2]]
    const genreCount = new Array(sortedGenre.length).fill(0);

    for(let i=0;i<genreCount.length;i++){
        //각 장르별로 곡 찾기
        console.log("genre : "+sortedGenre[i][0]);
        const genreSong = plays.filter((val,idx)=> genres[idx] === sortedGenre[i][0]).sort((a,b)=>b-a);
        if(genreSong.length < 2){
            console.log("1");
            console.log(plays.findIndex((val) => val === genreSong[0]));
             answer.push(plays.findIndex(val=>val === genreSong[0]));
        }
        else {
            const idx1 = plays.findIndex((val) => val === genreSong[0]);
            const idx2 = plays.findIndex((val) => val === genreSong[1]); 
            if(idx1 !== idx2){
                answer.push(idx1);
                answer.push(idx2);
            }else{
                const filterIdx = plays.filter((val) => val === plays[idx1]);
                answer.push(filterIdx[0]);
                answer.push(filterIdx[1]);
            }
        }

    }

    return answer;
    
}
//map에는 한 종류의 value만 사용할 수 있어서,  value를 저장하고 다시 findIndex하고 하다보니 되게 길어지고 더러움.
//map, filter를 잘 사용하는 걸 다시 고려해보자. 


//다른 사람 풀이
//map이랑 filter로 어떻게 써보려고 했다가 포기했었는데 여기선 딱 내가 원했던대로 잘 사용돼있다.
//map말고 객체를 써볼 생각을 왜 안했지
function solution(genres, plays) {
    var dic = {};
    genres.forEach((t,i)=> {
        dic[t] = dic[t] ?  dic[t] + plays[i] :plays[i];        
    });
    //{'classic' : 2000, 'pop': 1200} 이런 식으로 객체

    var dupDic = {};
    return genres          
          .map((t,i)=> ({genre : t, count:plays[i] , index:i}))
          .sort((a,b)=>{               
               if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
               //장르가 같지않다면 재생수가 많은 장르를 앞으로
               if(a.count !== b.count) return b.count - a.count;
               //곡 재생수가 다르다면 더 많은 곡을 앞으로
               return a.index - b.index;
               //재생수가 같을 경우 더 낮은 인덱스 곡을 앞으로 
           })
           .filter(t=>  {
               //sort된 array에서 2곡까지만 넣기. false로 return하면 pass할 수 있다는 걸 생각안하고
               //map으로 어떻게 패스할까 고민하다가 포기했었음. 다음엔 filter를 사용해서 원하는 value만 걸러보자...
               if(dupDic[t.genre] >= 2) return false;
               dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre]+ 1 : 1;
               return true;
            })
           .map(t=> t.index);    //인덱스만 리턴 
}



console.log(
  solution(
    ["classic", "classic", "classic", "classic", "pop"],
    [500, 150, 800, 800, 2500]
  )
);