function solution(n, costs) {
    var answer = 0;
    costs.sort((a,b)=> a[2] - b[2]);
    let range = [...Array(n).keys()];
    
    const check = _ =>{
        for(let i=1;i<n;i++){
            if(range[0] !== range[i])   return false;
        }
        return true;
    }
    const connect = (o, t) =>{
        let one = range[o];
        let two = range[t];
        for(let i=0;i<n;i++){
            if(range[i] === two) range[i] = one;
        }
    }
    while(!check()){
        let [one, two, cost] = costs.shift();
        
        if(range[one] !== range[two]){
            connect(one, two);
            answer += cost;
        }
    }
    
    return answer;
}