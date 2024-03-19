import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";

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
        {/* :id는 리액트 문법임. :뒤에오는 건 pathname이라고 생각하면 이해하면 될듯하다.
            만약 localhost:3000/blog로 접속하면 아무것도 뜨지 않는다. localhost:3000/blog/1 처럼 뒤에 추가로 문자열을 넣어줘야 Blog Page를 볼 수 있음.
            뒤쪽에 queryString, hash를 입력 가능. console에서 확인해보면 queryString은 search, hash는 hash에 담겨있는 것을 확인할 수 있다.*/}
        <Route path="/blog/:id" element={<Blog />}/>
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

function Blog(){
  const location = useLocation();
  console.log(location);
  return <h1>hello Blog</h1>
}

export default App;