function solution(str1, str2) {
    var answer = 0;
    let hap = new Array();
    str1= str1.toUpperCase().replace(/[^A-Z]/g, " ");
    str2= str2.toUpperCase().replace(/[^A-Z]/g, " ");
    
    const subset = str => {
        let result = [];
        for(let i=0;i<str.length-1;i++){
            let word = str.substr(i,2);
            if(word.indexOf(" ")===-1){
                result.push(str.substr(i,2));
            }
        }
        return result;
    }
    let arr1 = subset(str1);
    let arr2 = subset(str2);
    
    if(!arr1.length && !arr2.length) return 65536;
    
    for(let i=0;i<arr1.length;i++){
        let n = arr2.indexOf(arr1[i]);
        hap.push(arr1[i]);
        if(n !== -1){
            arr2.splice(n, 1);
            answer++;
        }
    }
    hap.push(...arr2);
    
    return (Math.floor(answer/hap.length * 65536));
}