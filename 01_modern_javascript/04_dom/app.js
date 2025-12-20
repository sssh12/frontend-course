// 다른 파일에서 함수 가져오기 (Import)
import { increase, decrease, getCount } from "./counter.js";

// 1. DOM 요소 선택하기 (querySelector)
// HTML의 id나 class를 이용해 요소를 자바스크립트로 가져옴.
const display = document.querySelector("#count-display");
const btnMinus = document.querySelector("#btn-minus");
const btnPlus = document.querySelector("#btn-plus");

// 2. 화면 업데이트 함수
const updateDisplay = () => {
  display.textContent = getCount();
};

// 3. 이벤트 리스너 연결하기 (Event Listener)
// 버튼을 "click" 했을 때 실행할 함수를 등록.

btnPlus.addEventListener("click", () => {
  increase(); // 데이터 변경
  updateDisplay(); // 화면 갱신
  console.log("증가 버튼 클릭됨. 현재 값: ", getCount());
});

btnMinus.addEventListener("click", () => {
  decrease();
  updateDisplay();
  console.log("감소 버튼 클릭됨. 현재 값: ", getCount());
});

console.log("앱이 실행되었습니다.");
