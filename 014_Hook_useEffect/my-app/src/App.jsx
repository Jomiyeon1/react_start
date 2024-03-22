import Counter from "./Components/Counter";
import Time from "./Components/Time"

// 하나의 파일에는 하나의 component가 들어간다. 
// 그동안은 실습용이였기때문에 App에 여러 component를 넣었던 것.
function App() {
  return (
    <>
      <Counter/>
      <Time/>
    </>
  );
}

export default App;