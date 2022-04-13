function solution(N, road, K) {
    var answer = 0;
    let graph = Array.from({length:N+1}, ()=>[]);
    road.map(([a,b,c])=>{
        graph[a].push({to:b, cost:c});
        graph[b].push({to:a, cost:c});
    })
    let que = [{to:1, cost:0}];
    let arr = new Array(N+1).fill(Infinity);
    arr[1] = 0;
    while(que.length){
        let {to, cost} = que.shift();
        for(let next of graph[to]){
            if(arr[next.to] > arr[to] + next.cost){
                arr[next.to] = arr[to] + next.cost;
                que.push(next);
            }
        }
    }
    
    return arr.filter(a=>a<=K).length;
}