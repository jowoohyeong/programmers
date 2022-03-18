function solution(n, edge) {
    let visited = new Array(n+1).fill(false);
    let depth = new Array(n+1).fill(0);
    let qu = [1];
    visited[1] = true;
    while(qu.length){
        let cur = qu.shift();
        for(let node of edge){
            if(node[0] === cur && !visited[node[1]]){
                visited[node[1]] = true;
                qu.push(node[1]);                
                depth[node[1]] = depth[cur]+1;
            }
            if(node[1] === cur && !visited[node[0]]){
                visited[node[0]] = true;
                qu.push(node[0]);                
                depth[node[0]] = depth[cur]+1;
            } 
        }
    }
    let max = Math.max(...depth);
    return depth.filter(a=> a===max).length; 
}