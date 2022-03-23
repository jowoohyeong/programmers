function solution(numbers) {
    var answer = [];
    const isPrime = num =>{
        const sqrt = parseInt(Math.sqrt(num));
        for(let i=2;i<=sqrt;i++){
            if(num%i===0) return false;

        }
        return true;
    }
    const makeNum = (num, idx) =>{

        if(num.length === numbers.length)   return;
        
        for(let i in numbers){
            if(idx.indexOf(i)===-1) {
                let newNum = num+numbers[i];
                newNum = parseInt(newNum);
                if(newNum>=2 && !answer.includes(newNum))
                    if(isPrime(newNum))  answer.push(newNum)
                makeNum(newNum, [...idx, i]);
            }
        }
    }
    makeNum("", []);
    return answer.length;
}