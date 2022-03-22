function solution(progresses, speeds) {
    var answer = [];
    while(progresses.length){
        for(let i in progresses){
            progresses[i] += speeds[i];
        }
        let cnt = 0;
        while(progresses[0] >= 100){
            cnt++;
            progresses.shift();
            speeds.shift();
        }
        
        if(cnt!==0) answer.push(cnt);
    }
    return answer;
}