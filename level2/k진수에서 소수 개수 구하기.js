function solution(n, k) {
    var answer = 0;
    let arr = n.toString(k).split("0");
    const isPrime = num =>{
        let sqrt = Math.sqrt(num);
        for(let i=2;i<=sqrt;i++){
            if(num %i ===0) return false;
        }
        return true;
    }
    for(let value of arr){
        if(value > 1 && isPrime(value))   answer++;
    }
    return answer;
}