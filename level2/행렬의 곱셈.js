function solution(arr1, arr2) {
    var answer = Array.from({length:arr1.length}, ()=>new Array(arr2[0].length).fill(0));
    for(let a in arr1){
        for(let b in arr2[0]){
            for(let c in arr1[0]){
                answer[a][b] += arr1[a][c]* arr2[c][b]
            }
        }
    }
    return answer;
}