function solution(n) {
    var answer = 0;
    let arr = [1,2];
    for(let i=2;i<n;i++){
        arr[i] = (arr[i-1]+arr[i-2])% 1234567;
    }
    return arr[n-1];
}