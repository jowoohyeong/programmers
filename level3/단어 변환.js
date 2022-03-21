function solution(begin, target, words) {
    var answer = 10;
    let visited = new Array(words.length).fill(false);
    const dif = (str, str2) =>{
        let cnt =0;
        for(let i in str){
            if(str[i] !== str2[i]) cnt++; 
        }
        if(cnt === 1) return true;
        else return false;
    }
    const dfs = (word, depth) => {
        if(word === target && depth < answer) {
            answer = depth
            return depth;
        }
        for(let i in words){
            if(!visited[i] && dif(word, words[i])){
                visited[i]=true;
                dfs(words[i], depth+1);
                visited[i]=false;
            }
        }
    }
    if(words.indexOf(target)===-1)  return 0;
    dfs(begin, 0)
    return answer;
}