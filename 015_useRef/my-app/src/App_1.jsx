import React, { useState, useEffect, useRef } from 'react';
// useRef는 쉽게 변수라고 생각하면 된다. 
// 컴포넌트 태그에 직접적으로 접근하고 싶을 때 사용 (javascript의 querySelector, getElementById로 생각하면 됨.)
// useRef가 접근한 태그 요소의 값을 바꿀 때는 리렌더링을 발생시키지 않음 
// 데이터, state와 상관없이(리렌더링 하지 않고) component에 DOM을 제어하고 싶을 때 ref를 사용
// => (변하지 않는 값이니 남용하지 않고, 최후의 수단으로 사용하기를 권고.)
function Counter() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  let countThree = useRef(0)
  let countFour = 0
  console.log(countThree)

  // 랜더링 됨
  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 랜더링 됨
  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1)
    console.log(countTwo) // 비동기 -> useEffect로 추적하면 동기 가능
  }
  // 클릭하면 변수의 값은 증가하지만 랜더링은 되지 않음
  // 랜더링은 안되지만 값은 계속 가지고 있음 
  // => Three 버튼 클릭 후 재렌더링되도록 one이나 two를 누르면 가지고 있던 Three의 값을 브라우저에서 확인 가능하다.
  const handleCountUpThree = (e) => {
    countThree.current = countThree.current + 1
    console.log(countThree.current)
  }
  // 랜더링 안되고 다른 state가 변해서 재렌더링 되어도 0으로 초기화
  const handleCountUpFour = (e) => {
    countFour = countFour + 1
    console.log(countFour)
  }

  useEffect(() => {
    console.log('count가 감시되고 있습니다.')
    console.log(`감시된 변수 : ${count}`)
  }, [count]) // count가 변경되는 것을 감시
  return(
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
      <div>{countTwo}</div>
      <button onClick={handleCountUpTwo}>up!</button>
      {/* Three에 직접 접근하는 것이 아니라  countThree.current (.을찍고) 로 접근해야한다.*/}
      <div>{countThree.current}</div>
      <button onClick={handleCountUpThree}>up!</button>
      <div>{countFour}</div>
      <button onClick={handleCountUpFour}>up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;