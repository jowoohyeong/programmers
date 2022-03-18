function solution(a, edges) {
    let visited = new Array(a.length).fill(false);
    let tree = Array.from({length: a.length}, ()=> []);
    
    if(a.reduce((a,b) => a+ b, 0) !== 0) return -1;
    
    edges.forEach(([u,v]) =>{
        tree[u].push(v);
        tree[v].push(u);
    })        
    let stack = [[0, null]];
    let result = BigInt(0);
    while(stack.length){
        let [cur, parent] = stack.pop();
        if(visited[cur]){
            result += BigInt(Math.abs(a[cur]));
            a[parent] += a[cur];
            a[cur] = 0;
            continue;
        }
        visited[cur]= true;
        stack.push([cur, parent]);
        for(let a of tree[cur]){
            if(!visited[a]) stack.push([a, cur]);
        }
        
    }
    
    return result;
}