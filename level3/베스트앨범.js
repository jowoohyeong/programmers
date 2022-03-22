function solution(genres, plays) {
    var answer = [];
    let gplays = {};
    let infor = {}
    genres.forEach((v, k)=>{
        gplays[v] = (gplays[v] || 0) + plays[k];
        if(!infor[v]) infor[v] = [];
        
        infor[v].push({"play": plays[k], "num": k});
    })
    let arr = [];
    for(let a in gplays){
        arr.push({"genre":a, "num": gplays[a]});
    }
    arr.sort((a,b)=> b.num - a.num);
    arr.forEach((v,k)=>{
        let target = infor[v.genre];
        target.sort((a,b)=> b.play - a.play);
        target[0] && answer.push(target[0].num);
        target[1] && answer.push(target[1].num);
    });
    return answer;
}