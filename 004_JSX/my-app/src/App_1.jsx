import './app.css'

function App() {
  const styleH2 = {border : 'solid 1px black', color: 'blue', fontSize: '32px'}
  return (
    // 주석은 javascript와 동일
    <div>{/* 최상위태그는 하나만 */}
      <h1>Hello World~!</h1>
      <h2>TEST</h2>
      {/*style을 변수로 선언해서 사용가능 */}
      <h2 style={styleH2}>Hello Style</h2>
      <h2 style={ {border : 'solid 1px black', color: 'blue', fontSize: '32px'}}>Hello Style</h2>
      {/* sytle을 입힐땐 className을 사용한다. class는 다른 키워드로 사용되고 있음.
         class를 써도 동작은 하지만 경고문구가 뜬다. */}
      <p className="content"> style test</p>
      {/* 다중 주석은 이렇게 :)  
      <p> 여러줄 주석 테스트</p>
      <p> 여러줄 주석 테스트</p>
      <p> 여러줄 주석 테스트</p>
      */}
    </div>
  );
}

export default App;