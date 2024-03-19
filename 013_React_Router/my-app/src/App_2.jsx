import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // 이전 버전 코드
  // <Route path="/hello" exact render={() => <Hello name="개리" />} />
  return (
    <BrowserRouter>
      {/* Link는 Routes로 감싸주지 않아도 된다. */}
      {/* link는 주소만 바꿀 뿐 페이지를 새로 불러오진 않는다. */}
      <Link to="/"> home </Link>
      <Link to="/one"> one </Link>
      <Link to="/two"> two </Link>
      <Link to="/three"> three </Link>
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/one" element={<One name='MiYeon'/>}/>
        <Route path="/two" element={<Two />}/>
        <Route path="/three" element={<Three />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Index(){
  return <h1>hello world0</h1>
}

function One({name}){
  return <h1>{name} hello world1</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

export default App;