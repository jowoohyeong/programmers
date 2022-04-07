function solution(s) {
    let answer = [0, 0];
    
    while(s.length!==1){
        answer[0]++;
        let b = s.length;
        s = s.replace(/0/g, "");
        let f = s.length;
        answer[1] += b-f;
        s = f.toString(2);
    }
    return answer;
}