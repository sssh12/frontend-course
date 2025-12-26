import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
  return (
    // JSX는 반드시 하나의 부모 요소로 감싸져야 함.
    // <>...</>는 "Fragment"라고 부르며, 불필요한 div 없이 묶어줄 때 사용.
    <>
      <Header />
      <MainContent />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
