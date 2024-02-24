function App() {
  // 이벤트에 관련된 function name엔 handle을 넣어주는 것이 관례임
  function handleClickEvent(){
      console.log("handleClickEvent() 실행!");
  }
  return (
    <div className="App">
      <h1 onClick={()=>{console.log('click됨')}}>test2</h1>
      <h2 onClick={handleClickEvent}>event test</h2>
    </div>
  );
}

export default App;