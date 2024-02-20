import React, { Fragment } from 'react';

function App() {
  //상위 태그가 1개만 있어야해서 그동안은 div를 사용했지만,
  //이럴경우 div태그가 계속 늘어나게 된다.
  //Fragment로 묶어주면 위의 문제가 해결가능하다.
  //해당 코드처럼 Fragment를 명시하는 경우도 있고, 실무에선 import 없이 <>, </>로 사용하는 경우가 많다.
  return (
		// <Fragment>
		// 	<h1>안녕, 라이캣 1호!</h1>
		// 	<h1>안녕, 라이캣 2호!</h1>
		// </Fragment>
    <>
      <h1>안녕, 라이캣 1호!</h1>
      <h1>안녕, 라이캣 2호!</h1>
    </>
  );
}

export default App;