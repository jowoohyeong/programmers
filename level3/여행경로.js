function solution(tickets) {
    var answer = [];
    let visited = new Array(tickets.length).fill(false);
    tickets.sort();
    const dfs = (cur, arr) =>{
        if(!answer.length && arr.length-1 === tickets.length){
            answer = arr;
            return;
        }
        
        for(let i in tickets){
            if(tickets[i][0] === cur && !visited[i]){
                visited[i] = true;
                dfs(tickets[i][1], [...arr, tickets[i][1]]);
                visited[i] = false;
            }
        }
    }  
    
    dfs("ICN", ["ICN"]);
    return answer;
}