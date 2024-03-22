import React, { useState, useRef } from "react";

// useRef를 사용하지 않은 방식
const App = () => {
  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값
  // const a = ''
  // const b = ''

  const inputCheck = (e) => {
    e.preventDefault()
    console.log(document.querySelectorAll('input'))
    // 만약 다른 컴포넌트에 input이 더 있다면 정상적으로 작동하지 않을 것이다.
    // id를 사용하더라도 같은 id를 갖고있는 컴포넌트가 없다고 보장할 수 없으니, 정상작동하지 않을 가능성이 있다. 
    setEmailValue(document.querySelectorAll('input')[0].value)
    setPwValue(document.querySelectorAll('input')[1].value)
    // setEmailValue(emailInput.current.value)
    // setPwValue(pwInput.current.value)
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" />
        {/* 이메일 : <input type="email" ref={a} /> */}
        {/* 이메일 : <input type="email" ref={emailValue}/> */}
      </label>
      <label>
        비밀번호 : <input type="password" />
        {/* 비밀번호 : <input type="password" ref={b} /> */}
        {/* 비밀번호 : <input type="password" ref={pwValue} /> */}
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        로그인
      </button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  );
};

export default App;