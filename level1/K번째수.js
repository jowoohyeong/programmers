function solution(array, commands) {
    var answer = [];
    
    for(let arr of commands){
        let temp = array.slice(arr[0]-1, arr[1]);
        temp.sort((a,b)=> a-b);
        answer.push(temp[arr[2]-1]);
    }
    return answer;
}