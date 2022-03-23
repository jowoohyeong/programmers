function solution(answers) {
    let ans = new Array(3).fill(0);
    let arr5 = [1, 2, 3, 4, 5];
    let arr8 = [2, 1, 2, 3, 2, 4, 2, 5];
    let arr10= [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for(let i in answers){
        if(arr5[i%5] === answers[i])    ans[0]++;
        if(arr8[i%8] === answers[i])    ans[1]++;
        if(arr10[i%10] === answers[i])    ans[2]++;
    }
    let max = Math.max(...ans);
    let answer =[];
    for(let i in ans)   if(ans[i]===max) answer.push((i*1+1));
    return answer;
}