import React, { useEffect, useState } from "react";

function getName(){
	console.log("사실은 겁나 오래기다리는중...");
	return "미연";
}

function App() {
  //아래의 코드는 getName()이 계속 실행된다. 
  //const [name, setName] = useState(getName());
  
  //state에 인수로 getName을 함수값으로 넘겨준다. 
  //useState(getName)이 진행되면 최초 초기화 진행 과정에서 getName을 실행하게 된다. 
  //이후 업데이트(리렌더링 과정)에서 초기화가 진행되지 않기때문에 getName이 실행되는 부분이 생략된다. 
  // Lazy initialize는 초기값 계산에 많은 비용이 소요될 때 비효율적인 부분을 최적화하는데 사용할 수 있음.
  const [name, setName] = useState(getName);
  const [num, setNum] = useState(0);
  return(
    <>
    {/* 실제로 변경되는 값은 num뿐이지만 계속해서 getName()이 불필요하게 실행되고 있다. */}
      <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
      <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>
    </>
  )
}

export default App;