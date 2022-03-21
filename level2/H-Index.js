function solution(citations) {

    citations.sort((a,b)=> b-a);
    citations.push(0);
    for(let i=1;i<=citations.length;i++){
        if(i > citations[i-1]) return i-1;
    }
}