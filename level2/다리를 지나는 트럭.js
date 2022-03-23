function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = new Array(bridge_length).fill(0);
    while(truck_weights.length){
        bridge.shift();
        
        let hap = bridge.reduce((a,b)=> a+b, 0);
        if(hap + truck_weights[0] <= weight){ 
            bridge.push(truck_weights.shift());
        }else{
            bridge.push(0);
        }
        answer++;
    }
    
    return answer+bridge_length;
}