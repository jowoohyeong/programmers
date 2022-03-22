function solution(operations) {
    var answer = [];
    let arr = [];
    operations.forEach(v =>{
        let splited = v.split(" ");
        if(splited[0] === 'I')  {
            arr.push(splited[1]*1);
            arr.sort((a,b)=> a-b);
        }else{
            if(splited[1] === '1'){
                arr.pop();
            }else{
                arr.shift();
            }
        }
    });
    return arr.length ? [arr[arr.length-1], arr[0]] : [0, 0];
}