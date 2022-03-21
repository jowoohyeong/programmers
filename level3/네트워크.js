function solution(n, computers) {
    var answer = 0;
    let visited = new Array(n).fill(false);
    const dfs = num =>{
        visited[num] = true;
        for(let i in computers){
            if(!visited[i] && computers[num][i]) dfs(i);
        }
    }
    for(let i in computers){
        
        if(!visited[i]) {    
            dfs(i);
            answer++;
        }
    }
    return answer;
}