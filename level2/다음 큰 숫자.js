function solution(n) {
    var answer = 0;
    const check = str =>{
        let n = 0;
        for(let i=0;i<str.length;i++){
            if(str[i]==='1')    n++;
        }
        return n;
    }
    let num = check(n.toString(2));
    while(true){
        n++;
        if(num === check(n.toString(2)))    break;
    }
    return n;
    
}