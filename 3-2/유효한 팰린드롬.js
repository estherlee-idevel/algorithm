function solution(s){
    let answer = "YES";

    // a-z가 아닌 경우의 정규식을 '/'로 감싼 후, 'g'라는 modifier를 사용하여 모든 문자열을 빈 문자로 치환
    s = s.toLowerCase().replace(/[^a-z]/g, ""); 
    
    // 뒤집은 문자열이 기존 문자열과 다르다면 "NO" 반환
    if(s.split("").reverse().join("") !== s) return "NO";
    
    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));