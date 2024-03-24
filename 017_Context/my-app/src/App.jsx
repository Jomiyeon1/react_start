import React, { createContext } from "react";

const UserInfo = createContext({ name: "Miyeon", id: "miyeonIsFree" });

const App = () => {
  return (
    // 아래와 같이 값 변경도 가능하다.
    // Provider에 값이 없으면 에러가 발생하니 꼭! value를 넣어줘야한다.
    <UserInfo.Provider value={{ name: "Jomi", id: "ImJomi" }}>
    <HelloLicat/>
    </UserInfo.Provider>
  );
};

const HelloLicat = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <div>
          <h2>{value.name}</h2>
          <strong>{value.id}</strong>
          <HelloLicatTwo/>
        </div>
      )}
    </UserInfo.Consumer>
  );
};

const HelloLicatTwo = () => {
  return (
    <UserInfo.Consumer>
      {(value) => (
        <>
          <h2>Two : {value.name}</h2>
          <strong>{value.id}</strong>
        </>
      )}
    </UserInfo.Consumer>
  );
};

export default App;