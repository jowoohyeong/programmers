function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=> b-a);
    for(let i=0,j=people.length;i<j;i++){
        if(people[i]+people[j-1] <= limit)  j--;
        answer++;
    }
    return answer;
}