function solution(board, skill) {
    let imos = Array.from({length:board.length+1}, ()=> new Array(board[0].length+1).fill(0));
    
    skill.forEach(([type, x1,y1, x2,y2, degree])=>{
        imos[x1][y1] += type===1? -degree : degree;
        imos[x1][y2+1] += type===1? degree : -degree;
        imos[x2+1][y1] += type===1? degree : -degree;
        imos[x2+1][y2+1] += type===1? -degree : degree;
    })
    for(let i=0;i<imos.length;i++){
        let sum = imos[i][0];
        for(let j=1;j<imos[0].length;j++){
            imos[i][j] += sum;
            sum = imos[i][j];
        }        
    }
    for(let i=0;i<imos[0].length;i++){
        let sum = imos[0][i];
        for(let j=1;j<imos.length;j++){
            imos[j][i] += sum;
            sum = imos[j][i];
        }        
    }
    let cnt = 0;
    for(let i in board){
        for(let j in board[0]){
            board[i][j] += imos[i][j];
            if(board[i][j] > 0) cnt++;
        }
    }
    return cnt;
}