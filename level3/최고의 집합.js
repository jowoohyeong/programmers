function solution(n, s) {
    let ave= s/n>>0;
    var answer = new Array(n).fill(ave);
    if(s<n) return [-1];
    for(let i=0;i<s-ave*n;i++){
        answer[answer.length-i-1]++;
    }
    return answer;
}