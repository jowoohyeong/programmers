function solution(s) {
    return s
        .split(" ")
        .map(a=>a.charAt(0).toUpperCase()+a.substr(1).toLowerCase())
        .join(" ");
}