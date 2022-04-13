function solution(info, edges) {
    var answer = 0;
    let tree = Array.from({length:info.length}, ()=> []);
    edges.map(([a,b])=>tree[a].push(b));
    
    
    const dfs = (current, next) =>{
        let [sheep, wolves, cur] = current;
        let nextNode = [...next];
        let idx = nextNode.indexOf(cur);
        
        sheep += !info[cur];
        wolves += info[cur];
        answer = Math.max(answer, sheep);
        
        if(sheep === wolves) return;
        if(tree[cur].length) nextNode.push(...tree[cur]);
        nextNode.splice(idx, 1);
        for(let a of nextNode){
            dfs([sheep, wolves, a], nextNode);
        }
    }
    dfs([0,0,0], [0]);
    return answer;
}