function solution(rows, columns, queries) {
    var answer = [];
    let graph = Array.from(Array(rows), () => new Array(columns));
    let cnt = 1;
    for(let i=0;i<rows;i++){
        for(let j=0;j<columns;j++){
            graph[i][j] = cnt++; 
        }
    }
    const change = (x1, y1, x2, y2) => { 
        let x = x1-1;
        let y = y1-1;
        x2 -= 1;
        y2 -= 1;
        let flag = true;
        let pre = graph[x][y];
        let min = rows*columns;
        while(true){
            let temp;
            min = Math.min(min, pre);
            
            if(flag){
                if(y!== y2){
                    temp = graph[x][y+1];
                    graph[x][y+1] = pre;
                    pre = temp;
                    y+=1;
                }else{
                    temp = graph[x+1][y];
                    graph[x+1][y] = pre;
                    pre = temp;
                    x+=1;
                }
                if(x === x2 && y === y2) flag = false;
            }else{
                if(y!== y1-1){
                    temp = graph[x][y-1];
                    graph[x][y-1] = pre;
                    pre = temp;
                    y-=1;
                }else{
                    temp = graph[x-1][y];
                    graph[x-1][y] = pre;
                    pre = temp;
                    x-=1;
                }
            }
            if(x === x1-1 && y === y1-1) return min;
        }
    }
    for(let i=0;i<queries.length;i++){
        let [a,b,c,d] = queries[i];
        let minValue = change(a,b,c,d);
        answer.push(minValue);
    }
    return answer;
    
}