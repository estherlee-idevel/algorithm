function solution(s) {
    let answer = "YES";
    s = s.toLowerCase(); // 소문자로 통일
    let len = s.length;
    for (let i = 0; i < Math.floor(len / 2); i++) { // s가 홀수인 경우 소수점 버림
      if (s[i] != s[len - i - 1]) return "NO";
    }
    return answer;
  }
  
let str = "goooG";
console.log(solution(str));