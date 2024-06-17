import { BrowserRouter, Routers, Router } from "react-router-dom" 

function App() {
  return (
    <BrowserRouter>
      <Routers>
        <Router path="/" />
      </Routers>
    </BrowserRouter>
  );
}

export default App;