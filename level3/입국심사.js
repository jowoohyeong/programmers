function solution(n, times) {
    times.sort((a,b)=> b-a);
    let min = 0;
    let max = times[0] * n;
    while(min < max){
        let mid =parseInt((min+max)/2)
        let cnt = times.reduce((a,b)=> a + parseInt(mid/b), 0);
        if(cnt >= n)    max = mid;
        else min = mid+1;
    }
    return max;
}