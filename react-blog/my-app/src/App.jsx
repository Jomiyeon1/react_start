import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import BlogDetail from "./pages/blogDetail/BlogDetail"

function App() {
  return (
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
  );
}

export default App;