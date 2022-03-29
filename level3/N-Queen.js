function solution(n) {
    var answer = 0;
    let board = new Array(n-1);
    
    const check = (board, idx) =>{
        for(let i=0;i<idx;i++){
            if(board[i] === board[idx]) return false;
            if(Math.abs(i-idx) === Math.abs(board[i] - board[idx])) return false;
        }
        return true;
    }
    const dfs = (board, row) =>{
        if(row === n-1) {
            answer++;
            return;
        }
        for(let i=0;i<n;i++){
            board[row+1] = i;
            if(check(board, row+1)) dfs(board, row+1);
        }
    }
    
    for(let i=0;i<n;i++){
        board[0] = i;
        dfs(board, 0);
    }
    return answer;
}