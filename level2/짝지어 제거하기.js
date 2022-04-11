function solution(s){
    let stack = [];
    let i=0;
    while(s.length>i){
        stack.push(s[i]);
        i++;
        while(stack.length && stack[stack.length-1] === s[i]){
            i++;
            stack.pop();
        }
    }
    return stack.length ? 0 : 1;
}