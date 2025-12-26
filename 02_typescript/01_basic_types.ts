// 1. 기본 타입 지정 (Primitive Types)
// 변수명 뒤에 : 타입을 붙임.
const playerName: string = "faker";
const playerAge: number = 28;
const isPro: boolean = true;

// 배열 타입
const skills: string[] = ["Q", "W", "E", "R"];
// const scores: number[] = [10, 20, "30"] // 문자열이 들어가면 에러 발생

console.log(`선수: ${playerName}, 나이: ${playerAge}`);

// 2. 인터페이스 (Interface) - 객체 설계도
// 객체가 어떤 모양이어야 하는지 미리 정의.
interface Todo {
  id: number;
  title: string;
  completed: boolean;
  author?: string; // ?는 있어도 되고 없어도 되는 '선택적 속성'
}

// 위에서 만든 설계도(Interface)를 타입으로 사용
const myTodo: Todo = {
  id: 1,
  title: "TypeScript",
  completed: false,
  // author는 없어도 에러 안 남. (? 때문)
};

console.log("내 할 일: ", myTodo);

// 3. 함수 타입 지정
// 매개 변수와 반환값(return)에도 타입을 붙임
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

// addNumbers("5", 10) // 문자열을 넣으면 에러 발생
const result = addNumbers(5, 10);
console.log("결과: ", result);
