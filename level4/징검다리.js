function solution(distance, rocks, n) {
    let min = 0;
    let max = distance;
    
    rocks.push(distance)
    rocks.sort((a,b)=> a-b);
    while(min <= max){
        let now =0, cnt=0;
        let mid = parseInt((min+max)/2); 
        for(let i=0;i<rocks.length;i++){
            if(rocks[i] - now < mid) cnt++;
            else now = rocks[i];
        }
        if(n < cnt) max = mid-1;
        else    min = mid+1;
    }
    
    return max;
}