function solution(n, works) {
    if(works.reduce((a,b)=> a+b, 0) < n) return 0;
    while(n> 0){
        works.sort((a,b)=> b-a);
        let max = works[0];
        for(let i=0;i<works.length;i++){
            if(max === works[i] && n>0){
                works[i]--;
                n--;
            }
        }
    }
    return works.reduce((a,b)=> a+ b**2, 0);
}