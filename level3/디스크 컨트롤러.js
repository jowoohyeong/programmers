function solution(jobs) {
    var answer = 0;
    let len = jobs.length;
    jobs.sort((a,b)=> a[0] - b[0]);
    let qu = new Array();
    let time = 0;
    while(qu.length || jobs.length){
        while(jobs.length && jobs[0][0] <= time){
            qu.push(jobs.shift());
        }
        if(!qu.length){ 
            time = jobs[0][0];
            continue;
        };
        qu.sort((a,b)=> a[1] - b[1]);        
        let node = qu.shift();
        answer += time + node[1] - node[0];
        time += node[1];
    }
    
    return answer/len>>0;
}