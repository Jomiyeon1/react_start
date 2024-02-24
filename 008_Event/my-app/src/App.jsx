import React, { useState } from "react";


let user = {
  login: false,
  id:'MiYeon',
  nickname:'Yeon'
}
function Homepage(){
  return(
    <div>
      <h1>Welcome~! 🙌</h1>
      <button> 로그아웃 </button>
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
      user.login = true;
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
  
  const handleLoginInput = (e) => {
    console.log("id", e.target.value);
    setId(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log("pw", e.target.value);
    setPw(e.target.value);
  };

  return(
    <div>
      {user.login ? <Homepage/> : <Login id={id} pw={pw} handleLoginInput={handleLoginInput} handlePasswordInput={handlePasswordInput}/>}
    </div>
  );
}

export default App;