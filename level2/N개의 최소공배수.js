function solution(arr) {
    var answer = arr[0];
    const LCM = (a,b) => {
        if(!a)  return b;
        return LCM(b%a, a);
    }
    
    for(let i=1;i<arr.length;i++){
        answer *= arr[i] / LCM(answer, arr[i])
    }
    
    
    return answer;
}