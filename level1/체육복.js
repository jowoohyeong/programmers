function solution(n, lost, reserve) {
    var arr = new Array(n+1).fill(1);
    for(let i of lost)  arr[i]--;
    for(let i of reserve)   arr[i]++;
    
    for(let i=1;i<arr.length;i++){
        if(arr[i] >1){
            if(arr[i-1] ===0){
                arr[i]--;
                arr[i-1]++;
            }else if(arr[i+1] ===0){
                arr[i]--;
                arr[i+1]++;
            }
        }
    }
    return arr.filter(a=>a>0).length-1;
}