function solution(enroll, referral, seller, amount) {
    let tree = {};
    tree["-"] = {"parent": null, "cost" : 0};
    enroll.forEach((name, idx)=> tree[name]={"parent": referral[idx], "cost" : 0});
    
    const BottomUp = (name, cost) =>{
        let target = tree[name];
        if(!target.parent || !cost) return;
        let income = cost * 0.1 >> 0;
        target.cost += cost - income;
        BottomUp(target.parent, income)
    }
    for(let i in seller){
        BottomUp(seller[i], amount[i]*100);
    }
    return enroll.map(name => tree[name].cost);
}