import { useState } from "react";

function App() {
  
  const [message, setMessage] = useState("여기를 주목하세요");

  // 이벤트에 관련된 function name엔 handle을 넣어주는 것이 관례임  
  const handleOnMouseEnter = () => {
    setMessage("안녕하세요!");
  };

  const handleOnMouseLeave = () => {
    setMessage("안녕히가세요!");
  };
  return (
    <div>
      <p 
        onMouseEnter={handleOnMouseEnter} 
        onMouseLeave={handleOnMouseLeave}
      >
        여기에 마우스를 올려보세요!
      </p>
      <div>{message}</div>
    </div> 
  );
}

export default App;