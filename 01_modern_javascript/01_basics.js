// 1. 변수 선언: const와 let
// const: 재할당 불가능 (기본적으로 사용)
const studentName = "오승하";
console.log("학생 이름: ", studentName);

// studentName = "김철수"; // 에러 발생

// let: 재할당 가능 (값이 변해야 할 때 사용)
let level = 1;
console.log("현재 레벨: ", level);

level = 2;
console.log("레벨업: ", level);

// 2. 템플릿 리터럴 (백틱 ` 사용)
// 옛날 방식: "이름은 " + studentName + "이고, 레벨은 " + level + "입니다."
const greeting = `안녕하세요. 이름은 ${studentName}이고, 레벨은 ${level}입니다.`;
console.log(greeting);

// 3. 화살표 함수 (Arrow Function)
// 기존 방식
function addOld(a, b) {
  return a + b;
}

// 화살표 함수 방식
// const 함수 이름 = (매개 변수) => { 실행 코드 }
const addNew = (a, b) => {
  return a + b;
};

// 더 짧은 방식 (리턴만 있을 경우 중괄호와 return 생략 가능)
const addShort = (a, b) => a + b;

console.log("기존 함수 결과: ", addOld(5, 10));
console.log("화살표 함수 결과: ", addNew(5, 10));
console.log("더 짧은 방식 결과: ", addShort(5, 10));
