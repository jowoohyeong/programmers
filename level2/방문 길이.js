function solution(dirs) {
    var answer = 0;
    let road = new Set();
    let move = {"U":[1,0], "R":[0,1], "D":[-1, 0], "L":[0, -1]}
    let [x, y] = [0, 0];
    for(let dir of dirs){
        let nx = x + move[dir][0];
        let ny = y + move[dir][1];
        if(nx > 5 || ny > 5 || nx < -5 || ny < -5)  continue;
        
        road.add("" + x + y + nx + ny);
        road.add("" + nx + ny + x + y);
        x = nx;
        y = ny;
    }
    return road.size/2;
}