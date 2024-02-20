function App() {
  const name = 'MiYeon';
  function 함수(){
    return 100
  }
  const 변수 = 10;
  const 값 = true;
  const 값2 = null;
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <p>{100 + 1}</p>
      <p>{'hello' + 'world'}</p>
      {/* 브라우저에서 확인해보면 콤마없이 149 로 출력된다.  */}
      <p>{[1, 2, 3].map(x => x**2)}</p>
      <p>{함수()}</p>
      <p>{변수}</p>
      <p>{값?'참':'거짓'}</p>
      {/* ??(물음표두개)는 null 이나 undefined 일때 값을 return 한다.
          nullish 연산자라고 부른다. */}
      <p>{값2??'값2는 null이거나 undefined이다.'}</p>
    </div>
  );
}

function Homework(){
  const defaultStyle = {backgroundColor:'black', color:'white'}
  const redFont = {color:'red'};
  let varDate = new Date();
  return(
  <div style={defaultStyle} className="App">
    <h1>HomeWork</h1>
    <h2 style={redFont}> 년 : {varDate.getFullYear()}</h2>
    <h2> 월/일 : {varDate.getMonth()}/{varDate.getDate()}</h2>
    <h2> 시간 : {varDate.getHours()}시{varDate.getMinutes()}분{varDate.getSeconds()}초</h2>
  </div>
  )
}

function DefaultPage() {
  return(
    <div>
      <App/>
      <Homework/>
    </div>
  )
}
export default DefaultPage;