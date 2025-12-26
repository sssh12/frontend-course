import { useState } from "react";

const Counter = () => {
  // 1. useState 선언
  // count: 현재 상태 값 (초기값 0)
  // setCount: 값을 바꿀 때 쓰는 전용 함수
  const [count, setCount] = useState<number>(0);

  // 2. 증가 함수
  const handleIncrease = () => {
    setCount(count + 1);
    console.log("증가됨", count + 1); // 화면이 다시 그려짐
  };

  // 3. 감소 함수
  const handleDecrease = () => {
    setCount(count - 1);
    console.log("감소됨", count - 1);
  };

  return (
    <div
      style={{
        border: "2px solid #ddd",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>카운터 예제</h2>

      {/* 변하는 값(State) 보여주기 */}
      <h1 style={{ fontSize: "3rem", margin: "10px 0" }}>{count}</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={handleDecrease}
          style={{
            padding: "10px 20px",
            background: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          -1 감소
        </button>
        <button
          onClick={handleIncrease}
          style={{
            padding: "10px 20px",
            background: "#4ecdc4",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          +1 증가
        </button>
      </div>
    </div>
  );
};

export default Counter;
