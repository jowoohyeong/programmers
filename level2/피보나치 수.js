function solution(n) {
    var F = [0,1,1];
    for(let i=3;i<=n;i++){
        F[i] = (F[i-1] + F[i-2]) % 1234567;
    }
    return F[n];
}