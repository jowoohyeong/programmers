function solution(n, results) {
    var answer = 0;
    let graph = Array.from({length:n+1}, () => new Array(n+1).fill(false));
    results.forEach(([a,b])=>{
        graph[a][a] = 0;
        graph[a][b] = 1;
        graph[b][a] = -1;
        graph[b][b] = 0;
    })
    let range = [...Array(n).keys()].map(a => a+1);
    
    for(let mid of range){
        for(let a of range){
            for(let b of range){
                if(graph[a][mid] === 1 && graph[mid][b] === 1)  graph[a][b] = 1;
                else if(graph[a][mid] === -1 && graph[mid][b] === -1)  graph[a][b] = -1;
            }
        }
    }
    for(let arr of graph){
        let flag = true;
        for(let a of range){
            if(arr[a] === false){
                flag = false;
            }
        }
        if(flag) answer++;
    }
    return answer;
}