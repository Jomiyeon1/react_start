import { useState, useMemo } from 'react'


function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

function App() {
  const [count, setCount] = useState(0)
  // useMemo : 부하가 걸리는 function을 랜더링할 떄마다 실행을 하는 것이 아닌, 가지고 있다가 필요할 때 출력만 해주는 것.
  const result = useMemo(()=>{
    return 부하()
  }, [])

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>{count}</div>
      <button onClick={handleCountUp}>UP!</button>
    </div>
  );
}
export default App;