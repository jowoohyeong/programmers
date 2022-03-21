function solution(n) {
    var answer = [];
    
    const hanoi = (depth, start, mid, end) =>{
        if(depth<1 ) return answer;
        hanoi(depth-1, start,end, mid);
        answer.push([start, end]);
        hanoi(depth-1, mid, start, end);
    }
    
    hanoi(n, 1,2,3);
    return answer;
}