import styled from 'styled-components';

const ContentsStyle = styled.div`
  text-align: center;
  margin-bottom: 15rem;
`
const InputStyle = styled.input`
  background-color: rgb(97, 218, 251);

`
const H1Style = styled.h1`
  color:  rgb(97, 218, 251);
`
const H2Style = styled.h2`
  color : white;
`
const Contents = () => {
  return (
    <ContentsStyle>
      <H1Style>React</H1Style>
      <H2Style>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</H2Style>
      <InputStyle type='submit' value='시작하기'/> 자습서 읽어보기
    </ContentsStyle>
  )
}

export default Contents;
