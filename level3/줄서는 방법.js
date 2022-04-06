function solution(n, k) {
    let answer = [];
    let range = [...new Array(n).keys()].map(a=>a+1);
    let fac = range.reduce((a,b)=>a*b, 1);
    k--;
    while(range.length){
        fac /= range.length;
        let idx = parseInt(k/fac);
        answer.push(range[idx]);
        range.splice(idx,1);
        k%=fac;
    }
    return answer;
}