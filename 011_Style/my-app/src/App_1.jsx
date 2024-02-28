import { createGlobalStyle } from "styled-components"
import Example from "./Components/Example"

// 결국 createGlobalStyle은 function.
const GlobalStyle = createGlobalStyle`
  span {
    color: skyblue;
    font-size: 12px;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <h1>Hello world 1</h1>
      <span>Hello world 2</span>
      <Example/>
    </>
  );
}

export default App;