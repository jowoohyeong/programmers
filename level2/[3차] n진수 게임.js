function solution(n, su, m, p) {
    let answer = '';
    let result = '';
    for(let i=0;i<m*su;i++){
        answer += i.toString(n);
    }
    for(let i=p-1;result.length<su;i+=m){
        result += answer[i];
    }
    return result.toUpperCase();
}