function solution(fees, records) {
    const [defaultTime, defaultCost, minute, cost] = fees;
    var answer = [];
    let record = {};
    records.forEach((v)=>{
        let [times, carNum, check] = v.split(" ");
        let [clock, min]= times.split(":");
        let time = Number(clock)*60 + Number(min);
        !record[carNum] ? record[carNum]=[time] : record[carNum].push(time);
    })
    let recordArr = new Array();
    for(let key in record){
        let target = record[key];
        if(target.length && target.length %2 ) target.push(1439)
        
        let parkingtime = 0;
        for(let i in record[key]){
            if(i % 2 ===0) parkingtime -= target[i];
            else parkingtime += target[i];
        }
        let overtime = parkingtime - defaultTime;
        let fee = overtime > 0 ? defaultCost+Math.ceil((overtime) / minute) * cost :defaultCost;
        answer.push([key, fee]);
    }
    
    return answer.sort((a,b)=> a[0]-b[0]).map(a=>a[1]);
    
    
}