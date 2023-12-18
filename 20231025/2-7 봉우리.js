function solution(arr){  
    let answer=0; // 봉우리 개수
    let n=arr.length;
    let dx=[-1, 0, 1, 0]; // x 좌표를 기준으로 이동하는 행의 움직임
    let dy=[0, 1, 0, -1]; // y 좌표를 기준으로 이동하는 행의 움직임

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 봉우리를 체크할 flag 변수를 1(true)로 초기화
            let flag = 1;

            // 행(i)과 열(i)을 기준으로 이동
            for (let k = 0; k < 4; k++) {
                let nx = i + dx[k]; // 행
                let ny = j + dy[k]; // 열
                
                // 봉우리가 아닌 경우를 체크
                if (
                    nx >= 0 &&
                    nx < n &&
                    ny >= 0 &&
                    ny < n &&
                    arr[nx][ny] >= arr[i][j]
                ) {
                    // 봉우리가 아닌 경우 0(false)로 할당
                    flag = 0;
                    break;
                }
            }
            // flag가 true 라면, 봉우리 개수를 카운트하는 `answer`를 1씩 더해준다.
            if (flag) answer++;
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));