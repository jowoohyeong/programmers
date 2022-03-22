function solution(clothes) {
    var answer = 1;
    let arr = {};
    for(let node of clothes){
        arr[node[1]] = (arr[node[1]] || 1) + 1;
    }
    for(let a in arr){
        answer *= arr[a];
    }
    return answer-1;
}