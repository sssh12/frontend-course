// 현재 숫자 상태 (State)
let count = 0;

// 숫자를 증가시키는 함수
export const increase = () => {
  count++;
  return count;
};

// 숫자를 감소시키는 함수
export const decrease = () => {
  count--;
  return count;
};

// 현재 숫자를 가져오는 함수
export const getCount = () => count;
