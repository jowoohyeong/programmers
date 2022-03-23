function solution(brown, yellow) {
    let sum = brown + yellow;
    
    for(let i=3;i<=sum;i++){
        let x = sum/i >>0;
        
        if((x-2)*(i-2) === yellow){
            return [x,i];
        }
    }
}