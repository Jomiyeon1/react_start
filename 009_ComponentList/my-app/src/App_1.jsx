function App() {
  return (
    <div className="App">
      <Hello name='MiYeon' />
    </div>
  );
}

function Hello({name}){
  const num = [1, 2, 3, 4, 5];
  // 변경된 값만을 재렌더링하기 위해서 key(고유한 ID값)을 준다
  // 인덱스를 key로 사용하면 되지만, 나중에 순서관련 문제가 생길 수 있어 권장하지 않는 방법이다.
  // key값은 동일 component에서만 유일한 값이면 된다.
  // key 값이 없을 경우 아래 코드를 예시로 들어 설명하면,
  // 중간에 2번을 삭제시켰을 경우, 2번을 지우고 3번을 만들고, 3번을 지우고 4번을 만든다.
  // 하지만 key값이 있을 경우 2번을 삭제하면, key값으로 2번을 찾아 삭제하고, 3번과 4번의 위치를 바꿔준다.
  // const numComponentList = num.map(i => <p key={i}> Hi, {name}! No.{i} Bot!</p>)
  // 위 코드는 javascript code 이기때문에 return에 바로 넣어 사용 가능하다.

  return(
    num.map(i => <p key={i}> Hi, {name}! No.{i} Bot!</p>)
  )
}
export default App;