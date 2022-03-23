function solution(s) {
    var arr = s.split(" ").map(a=>a*1).sort((a,b)=> a-b);
    return [arr[0], arr[arr.length-1]].join(' ');
}