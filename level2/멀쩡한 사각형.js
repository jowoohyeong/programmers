function solution(w, h) {
    const gcd = (a,b)=>{
        if(b===0)  return a;
        else return gcd(b, a%b);
    }
    return w*h-(w+h) + gcd(w,h);
}