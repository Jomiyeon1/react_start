import { useState, useMemo, useRef } from 'react'

// useMemo, UserEffect 차이
// useMemo : 랜더링 전에 실행되어서 memoization한 것을 반환해준다. 값이 변경되었는 지 확인 후 랜더링 전에 저장된 것을 보내주는 것.
//           => 리랜더링이나 불필요한 재실행 과정을 막는 방법으로 사용 (useEffect는 랜더링 후에 동작되기 때문에 리랜더링을 방지할 수 없다.) 
// UserEffect : 랜더링 후에 일어난다. 랜더링 후에 상태가 업데이트 되었을때 감지하여 동작
//           => 상태를 이용한 관리에 사용
// ✔️ useMemo는 랜더링에 직접적인 영향을 미칠 수 있다.
// => 
function App() {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function handleInputName(e){
    setName(e.target.value);
    console.log('렌더링(handleInputName) - 1');
  }

  function handleInputId(e){
    setId(e.target.value);
    console.log('렌더링(handleInputId) - 2');
  }

  function handleSubmit(e){
    e.preventDefault();
    const newInfo = [...userInfo, {name, id}];
    inputName.current.value = '';
    inputId.current.value = '';
    inputName.current.focus();
    setUserInfo(newInfo);
    console.log('렌더링(handleSubmit) - 3');
  }

  function getNum(user){
    console.log('getNum 랜더링');
    return (
      user.length
    )
     
  }

  const n = useMemo(() => getNum(userInfo), [userInfo]);

  return (
    <div className="App">
      <form>
        <input
          type="text"
          placeholder='이름을 입력하세요!'
          onChange={handleInputName}
          ref={inputName}
          />

        <input
          type="text"
          placeholder='아이디를 입력하세요!'
          onChange={handleInputId}
          ref={inputId}
          />

          <button 
            type='submit'
            onClick={handleSubmit}
          >
                버튼
          </button>
      </form>
      <ul>
        {userInfo.map((value, index)=> (
          <li key={index}>
            <h3>{value.name}</h3>
            <strong>@{value.id}</strong>
          </li>
        ))}        
      </ul>
      <span>{n}</span>
    </div>
  );
}

export default App;