import React, { createContext, useContext } from "react";

const UserInfo = createContext({ name: "Miyeon", id: "miyeonIsFree" });

const App = () => {
  return (
    <HelloLicat/>
  );
};

const HelloLicat = () => {
  // useContext는 함수형 컴포넌트에서만 사용할 수 있다.
  // => 값의 전달 부분에서는 useContext(몇개의 자식을 건너뛰고 최하단의 자식에게 값을 전달하기 위함)와 리덕스(상태 관리)가 비슷하다.
  //    프로젝트의 크기, 용도에 맞게 사용해야한다.
  const {name, id} = useContext(UserInfo);
  return (

        <div>
          <h2>{id}</h2>
          <strong>{name}</strong>
          <HelloLicatTwo/>
        </div>
  );
};

const HelloLicatTwo = () => {
  const {name, id} = useContext(UserInfo);
  return (
        <>
          <h2>Two : {id}</h2>
          <strong>Two : {name}</strong>
        </>

  );
};

export default App;