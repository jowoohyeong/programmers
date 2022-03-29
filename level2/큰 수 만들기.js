function solution(number, k) {
    let stack = [number[0]];
    
    for(let i=1;i<number.length;i++){
        while(stack[stack.length-1] < number[i] && k>0){
            k--;
            stack.pop();
        }
        stack.push(number[i]);
    }
    stack.splice(stack.length-k);
    return stack.join("");
}