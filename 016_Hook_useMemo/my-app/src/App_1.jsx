
// useMemo는 useEffect와 비슷한 점이 많다.
// => tate가 있는 컴포넌트에 state 변화가 생기면 재평가 후 새로 랜더링을 하기 때문
// useMemo는 컴포넌트 성능 최적화에 사용됩니다. Memo는 memoization이라는 기법을 사용
// memoization EX) 재귀함수의 피보나치 순열(많은 함수가 반복된다.)
// 무거운 함수를 useMemo를 쓰면 한번만 계산한다. 
import { useState } from 'react'

// 결과값이 항상 같지만, 랜더링될 때마다 실행됨.
function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count, setCount] = useState(0)
  // 랜더링될때마다 실행되는 부하가 걸리는 function
  let result = 부하()

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }
  
  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      {/* 화면에서 up버튼을 누르면 반응이 늦은 것을 확인할 수 있다.(부하때문.) */}
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default App;