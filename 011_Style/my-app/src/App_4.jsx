import style from './app.module.css'
import Test from './Components/Test';

function App() {
    //마지막에 있는 css만 적용시키기때문에 div tag는 test.css의 color:red;만 적용된 걸 확인할 수 있다.
    //이를 방지하기 위해선  class명에 고유값을 추가해주어서 겹치지 않도록 해야한다.
    return (
      <div className="App">
        <div>App.jsx Test</div>
        <Test/>
        <div className={style.div1}> App.jsx div1</div>
      </div>
    );
  }
  
  export default App;