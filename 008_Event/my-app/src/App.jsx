import React, { useState } from "react";

function Homepage({ id, onLogout }) {
  return (
    <div>
      <h1>{id} Welcome~! 🙌</h1>
      <button onClick={onLogout}>로그아웃</button>
    </div>
  );
}

function Login(props) {
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    if (props.id === '') {
      alert("아이디를 입력하지 않았습니다.");
    } else if (props.pw === '') {
      alert("패스워드를 입력하지 않았습니다.");
    } else {
      alert("로그인 되었습니다!");
      // 사용자 상태를 업데이트하는 함수를 호출
      props.onLogin();
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" defaultValue={props.id} name="id" onChange={props.handleLoginInput} />
      </label>
      <br />
      <label>
        비밀번호 :
        <input type="password" name="pw" defaultValue={props.pw} onChange={props.handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
  );
}

function HandleRander(props) {
  console.log("HandleRander", props.login);
  return (
    <div>
      {props.login ? <Homepage id={props.id} onLogout={props.onLogout} /> : <Login id={props.id} handleLoginInput={props.handleLoginInput} handlePasswordInput={props.handlePasswordInput} onLogin={props.onLogin} />}
    </div>
  );
}

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [login, setLogin] = useState(false);

  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div>
      <HandleRander login={login} id={id} handleLoginInput={handleLoginInput} handlePasswordInput={handlePasswordInput} onLogin={handleLogin} onLogout={handleLogout} />
    </div>
  );
}

export default App;
