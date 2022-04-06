function solution(n, info) {
    var answer = new Array(info.length).fill(0);
    let max = 0;
    const dfs = (A, B, arrow, idx, target) =>{
        if(idx > 10){
            let dif = B - A;
            if(max < dif){
                target[10] += arrow;
                max = dif;
                answer = target; 
            }
            return;
        }
        if(arrow > info[10-idx]){
            let temp = [...target];
            temp[10-idx] = info[10-idx]+1;
            dfs(A, B+idx, arrow-temp[10-idx], idx+1, temp);
        }
        if(info[10-idx]){
            dfs(A+idx, B, arrow, idx+1, target);
        }else{
            dfs(A, B, arrow, idx+1, target);
        }
    }
    dfs(0, 0, n, 0, answer);
    if(!max) return [-1];
    return answer;
}