function solution(record) {
    var result = [];
    let ids = {};
    record.map(arr=>{
        let splited = arr.split(" ");
        if(splited[2])  ids[splited[1]] = splited[2];
    });
    for(let a of record){
        let splited = a.split(" ");
        if(splited[0] === "Enter"){
            result.push(ids[splited[1]]+"님이 들어왔습니다.");
        }else if(splited[0] === "Leave"){
            result.push(ids[splited[1]]+"님이 나갔습니다.");
        }
    }
    return result;
}