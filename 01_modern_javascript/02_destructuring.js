// 1. 객체 구조 분해 할당 (Object Destructuring)
const hero = {
  name: "아이언맨",
  actor: "로버트 다우니 주니어",
  team: "어벤져스",
};

// 기존 방식
const heroNameOld = hero.name;
const heroActorOld = hero.actor;

// 구조 분해 할당 방식
// 키 이름과 똑같은 변수에 값을 뽑아냄.
const { name, actor, team } = hero;

console.log(`이름: ${name}, 배우: ${actor}, 팀: ${team}`);

// 변수 이름 바꾸기 (name -> nickName으로 변경해서 받기)
const { name: nickName } = hero;
console.log(`별명: ${nickName}`);

// 2. 배열 구조 분해 할당 (Array Destructuring)
const numbers = [10, 20, 30, 40];

// 순서대로 값을 꺼냄
const [first, second, ...rest] = numbers;

console.log("첫 번째: ", first); // 10
console.log("두 번째: ", second); // 20
console.log("나머지: ", rest); // [ 30, 40 ]

// 3. 스프레드 연산자 (Spread Operator) - 객체/배열 복사 및 병합
const baseConfig = {
  theme: "dark",
  version: "1.0",
};

// baseConfig을 복사하면서 새로운 속성(showSidebar) 추가
// 리액트에서 상태  업데이트할 때 많이 쓰임
const userConfig = {
  ...baseConfig,
  showSidebar: true,
};

console.log("기본 설정: ", baseConfig);
console.log("사용자 설정: ", userConfig);

// 배열 합치기
const frontEnd = ["React", "Vue"];
const backEnd = ["Node.js", "Python"];

const fullStack = [...frontEnd, ...backEnd];
console.log("풀스택 스택: ", fullStack);
