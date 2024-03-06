import React, { useState } from "react";


let user = {
  login: false,
  id:'MiYeon',
  nickname:'Yeon'
}
function Homepage({id, onLogout}){
  return(
    <div>
      <h1>{id} Welcome~! 🙌</h1>
      <button  onClick={onLogout}> 로그아웃 </button>
    </div>
  );
}

function Login(props){
  const handleLoginSubmit = (e) => {
    e.preventDefault(); // 이벤트의 기본동작을 방지하는 메서드
    console.log("submit");
    if(props.id === ''){
      alert("아이디를 입력하지 않았습니다.");
    }else if(props.pw === ''){
      alert("패스워드를 입력하지않았습니다.");
    }else{
      alert("로그인 되었습니닷!");
      {/*user.login = true;를 사용하는 경우, React는 상태 변화를 감지하지 못하므로 컴포넌트가 다시 렌더링되지 않고, 변경된 상태를 화면에 반영하지 못한다.
      user.login = true; */}
      props.onLogin();
    }
  };
  return (
    <form onSubmit={handleLoginSubmit}>
      <label>
        아이디 : <input type="text" defaultValue={props.id} name="id" onChange={props.handleLoginInput} />
      </label>
      <br/>
      <label>
        비밀번호 :
        <input type="password" name="pw" defaultValue={props.pw} onChange={props.handlePasswordInput} />
      </label>
      <button type="submit">로그인</button>
    </form>
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

  return(
    <div>
      {login ? <Homepage id={id} onLogout={handleLogout}/> : <Login id={id} pw={pw} handleLoginInput={handleLoginInput} handlePasswordInput={handlePasswordInput} onLogin={handleLogin} onLogout={handleLogout} />}
    </div>
  );
}

export default App;