import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
// /users

// UserPage에 한번에 만들어도 될듯
// - Coupon Page : /users/coupon
// - Question Page : /users/question
// - Notice Page : /users/notice
// - User Page : /users
export default function User() {
  return (
    <BrowserRouter>
      <Link to="/user"> userPage </Link>
      <Link to="/user/coupon"> coupon </Link>
      <Link to="/user/question"> question </Link>
      <Link to="/user/notice"> notice </Link>
      <Routes>
        <Route path="/user/*" element={<Outlet />}>
          <Route path="" element={<UserPage/>}/>
          <Route path="coupon" element={<CouponPage/>}/>
          <Route path="question" element={<QuestionPage/>}/>
          <Route path="notice" element={<NoticePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function UserPage(){
  return( 
    <>
      <h1>MiYeon HomePage</h1>
      <h2>WelCome UserPage</h2>
    </>
  )
}

function CouponPage(){
  return( 
    <>
      <h1>MiYeon HomePage</h1>
      <h2>User CouponPage</h2>
      <h2>쿠폰 페이지</h2>
    </>
  )
}

function QuestionPage(){
  return( 
    <>
      <h1>MiYeon HomePage</h1>
      <h2>User QuestionPage</h2>
      <h2>질문 페이지</h2>
    </>
  )
}


function NoticePage(){
  return( 
    <>
      <h1>MiYeon HomePage</h1>
      <h2>User NoticePage</h2>
      <h2>User 공지 페이지</h2>
    </>
  )
}