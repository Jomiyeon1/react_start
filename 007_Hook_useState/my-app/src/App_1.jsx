import React, { useState } from 'react';
// useState를 사용하게되면, 값이 변경될 때 리액트는 자동으로 해당 컴포넌트를 다시 렌더링해준다.
// 재렌더링할 필요가 없는 데이터는 useState를 사용하지 않음으로써 자원을 아낄 수 있다.

function Resume(props) {
  // useState(0) 의 0은 like 의 초기값이 된다.
  // 구조분해할당으로 like : 변수, setLike : 변수를 변경할 수 있는 함수
  // 하단처럼 만들어준다.
  const [like, setLike] = useState(0);

  function clickLike() {
    setLike(like + 1)// like += 1;
      console.log(like);
  }

  const myColor = props.color;
  const styleColor = {color:myColor};

  return(
      <div>
          <h1>{props.name} 자기소개서</h1>
          <button onClick={clickLike}>like {like} </button>
      </div>
  )
}

function App() {
  return (
    <div className="App">
      <Resume name='MiYeon'/>
    </div>
  );
}

export default App;



