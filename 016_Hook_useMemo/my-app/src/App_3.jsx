import { useState, useMemo, useRef } from 'react'

// 최초 렌더링 → 이전 렌더링부분에 가상 돔 저장 
// → 상태 업데이트 → 상태 업데이트로 인한 가상 돔 렌더링 
// → 업데이트로 인해 렌더링된 가상 돔과 이전에 만들어진 가상 돔을 비교 → 바뀐 부분 브라우저에 렌더링
function App() {
  const inputName = useRef(null);
  const inputId = useRef(null);
  const [userInfo, setUserInfo] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  function handleInputName(e){
    setName(e.target.value);
    console.log('렌더링 - 1');
  }

  function handleInputId(e){
    setId(e.target.value);
    console.log('렌더링 - 2');
  }

  function handleSubmit(e){
    e.preventDefault();
    const newInfo = [...userInfo, {name, id}];
    inputName.current.value = '';
    inputId.current.value = '';
    inputName.current.focus();
    setUserInfo(newInfo);
    console.log('렌더링 - 3');
  } 
 
  //input에 text를 입력할때마다 랜더링이 되는 걸 확인할 수 있다.
  //userMemo를 통해 해당 문제를 해결해보자. 
  function getNum(user){
    console.log('getNum 랜더링');
    return (
      user.length
    )
     
  }

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
      <span>{getNum(userInfo)}</span>
    </div>
  );
}

export default App;