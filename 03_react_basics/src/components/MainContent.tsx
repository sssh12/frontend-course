const MainContent = () => {
  const userName = "오승하"; // 변수 선언
  const items = ["사과", "바나나", "체리"];

  return (
    <main style={{ padding: "20px", minHeight: "300px" }}>
      {/* 1. 변수 사용 */}
      <h2>안녕하세요, {userName}님!</h2>

      <p>오늘의 할 일을 확인해보세요.</p>

      {/* 2. 리스트 렌더링 */}
      <ul>
        {items.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {/* 3. className 사용 (class 아님) */}
      <button className="primary-btn" onClick={() => alert("클릭!")}>
        클릭해보세요
      </button>
    </main>
  );
};

export default MainContent;
