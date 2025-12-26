// 컴포넌트 이름은 항상 대문자로 시작
const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#f0f0f0",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <h1>First React App</h1>
      <nav>
        <a href="#home" style={{ marginRight: "10px" }}>
          Home
        </a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;
