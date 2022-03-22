function solution(priorities, location) {
    var answer = 0;
    let temp = [];
    priorities.forEach((num,key)=>{
        temp.push({num, "key" : key===location})
    });
    let cnt = 0;
    while(true){
        let target = temp.shift();
        if(!temp.some(a=> a.num > target.num)){
            cnt++;
            if(target.key) return cnt;
        }
        else temp.push(target);
    }
    return answer;
}