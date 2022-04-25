function solution(skill, skill_trees) {
    var answer = 0;
    skill = skill.split("");
    skill_trees.forEach((el)=>{
        let splited = el.split("");
        let temp = skill.slice();
        for(let i=0;i<splited.length;i++){            
            if(temp[0] === splited[i]) temp.shift();
        }
        
        if(!temp.length) answer++;
        else{
            let cnt = 0;
            for(let i=0;i<temp.length;i++){
                if(splited.indexOf(temp[i]) ===-1)    cnt++;
            }
            if(temp.length === cnt) answer++;
        }
        
    })
    return answer;
}