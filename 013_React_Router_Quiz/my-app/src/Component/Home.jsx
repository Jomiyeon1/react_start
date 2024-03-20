import { BrowserRouter, Routes, Route} from "react-router-dom"
// /
export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

function HomePage(){
  return <h1>MiYeon React HomePage</h1>
}