import React, { useRef, useState } from "react";

// useRef를 사용한 방식
// 자주 쓰이는 방식이니 자세히 살펴보자...
const App = () => {
  const emailInput = useRef(null); // email input에 대한 useRef
  const pwInput = useRef(null); // pw input에 대한 useRef

  const [emailValue, setEmailValue] = useState(""); // email state 값
  const [pwValue, setPwValue] = useState(""); // pw state 값

  const inputCheck = (e) => {
    e.preventDefault();
    // log를 보면 current에 담겨있는 것을 확인할 수 있다.
    console.log(emailInput);
    console.log(pwInput);
    setEmailValue(emailInput.current.value);
    setPwValue(pwInput.current.value);
  };

  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>
        이메일 : <input type="email" ref={emailInput} />
      </label>
      <label>
        비밀번호 : <input type="password" ref={pwInput} />
      </label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>
        회원가입
      </button>
      <span>{emailValue}</span>
      <span>{pwValue}</span>
    </form>
  );
};

export default App;