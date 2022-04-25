function solution(k, dungeons) {
    var answer = -1;
    let visited = new Array(dungeons.length).fill(false);
    
    const dfs = (depth, cur) => {
        for(let i=0;i<dungeons.length;i++){
            if(cur >= dungeons[i][0] && !visited[i]){
                visited[i] = true;
                dfs(depth+1, cur-dungeons[i][1]);
                visited[i] = false;                
            }
        }
        answer = Math.max(answer, depth);
    }
    dfs(0, k);
    return answer;
}