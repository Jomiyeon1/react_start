import styled from 'styled-components';

const ContentsStyle = styled.div`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
`
const InputStyle = styled.input`
  background-color: rgb(97, 218, 251);
  height: 3rem;
  width: 6rem;
  font-size: 1rem;
  border: 0rem;
  margin-right: .5rem;
`
const H1Style = styled.h1`
  color:  rgb(97, 218, 251);
  font-size: 3rem;
  margin-bottom: -.7rem;
`
const H2Style = styled.h2`
  color : white;
  font-weight: lighter;
  margin-bottom: 3rem;
`
const Contents = () => {
  return (
    <ContentsStyle>
      <H1Style>React</H1Style>
      <H2Style>사용자 인터페이스를 만들기 위한 JavaScript 라이브러리</H2Style>
      <InputStyle type='button' value='시작하기'/> 자습서 읽어보기
    </ContentsStyle>
  )
}

export default Contents;
