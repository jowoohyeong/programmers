function solution(n, words) {
    let last = words[0];
    last = last[last.length-1];
    let arr = [words[0]]; 
    let first ='';
    for(let i=1;i<words.length;i++){
        let idx = arr.indexOf(words[i]);
        if(idx===-1)    arr.push(words[i]);
        else return [i%n+1, parseInt(i/n)+1];
        
        first = words[i];
        if(last === first[0])   last = first[first.length-1];
        else    return [i%n+1, parseInt(i/n)+1]
        
    }
    return [0, 0]
}