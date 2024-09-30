import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home"
import BlogDetail from "./pages/blogDetail/BlogDetail"
import UserContext from "./context/UserContext";
//import data from"./database/data.json"

function App() {
  // data 확인용
  //console.log(data)

  const [userId, setUserId] = useState(1)
  const [isLogin, setIsLogin] = useState(true);
  return (
    <UserContext.Provider value={{userId, isLogin}}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={ <Home/> }
          />
          <Route 
            path="/blog/:id"
            element={ <BlogDetail/> } 
          />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;