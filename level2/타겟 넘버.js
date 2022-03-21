function solution(numbers, target) {
    var answer = 0;
    
    const recur = (depth, num) =>{
        if(depth===numbers.length) {
            if(num === target) answer++;
            return;
        }
        
        recur(depth+1, num+numbers[depth]);
        recur(depth+1, num-numbers[depth]);
    }
    recur(0, 0);
    return answer;
}