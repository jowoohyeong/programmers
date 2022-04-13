function solution(word) {
    var answer = 0;
    let words = ["A","E","I","O","U"];
    let store = [];
    const dfs = (idx, str) =>{
        if(idx===5) return;
        for(let i=0;i<words.length;i++){
            let temp = str + words[i];
            store.push(temp)
            dfs(idx+1, temp)
        }
    }
    dfs(0, "")
    return store.indexOf(word) + 1;
}