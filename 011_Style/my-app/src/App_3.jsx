import  styled from "styled-components"

// 개발자도구에서 스타일 적용된 것을 보면 class에 우리가 설정하지 않은 name이 들어가있는 것을 확인할 수 있다.
// => 설정해준 변수가 다른 component에 영향을 미치지않는다. (겹치는 것을 걱정할 필요가 없다.)
// js파일에서 모두 관리가 가능하고, javascript 문법으로 사용 가능(변수처리할 수 있다.)

const ContentDiv = styled.div`
  margin: 40px;
  border: 1px solid black;
`
const ContentH2 = styled.h2`
  color:  ${( {name} ) => (name === 'hello' ? 'red' : 'black' )};
  width: 200px;
  margin: 0 auto;
  text-align: center;
`

function App() {
  return (
    <ContentDiv>
      <ContentH2 name='hello'>Q&A</ContentH2>
      <ContentH2 name='hello2'>Q&A</ContentH2>
      <p> Q&A Contents</p>
    </ContentDiv>
  );
}

export default App;