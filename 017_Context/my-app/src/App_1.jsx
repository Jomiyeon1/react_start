// 부모 컴포넌트에 있는 props를 자식 컴포넌트에 전달시 부모 → 자식 → 자식 → 자식 순으로 의미없는 값(props)이 스쳐지나가게 된다.
// 해당 부분은 작은 프로젝트에서는 큰 상관이 없으나, 큰 프로젝트에서는 문제가 될 수 있다.
// 위 부분을 개선한 것이 Context이다. Context를 이용하면 부모 → 자식 컴포넌트로 바로 전달할 수 있다.
// Context는 props에 대한 전역 데이터 저장소라고 생각하면 된다. => 필요에 의해서만 사용하길 권고.(전역 데이터이기 때문)

// const App = () => {
//   return (
//     <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//   );
// };

// const HelloLicat = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h2>{props.value.id}</h2>
//       <strong>{props.value.name}</strong>
//       <HelloLicatTwo value={{name:props.value.name, id: props.value.id}}/>
//     </div>
//   );
// };

// const HelloLicatTwo = (props) => {
//   return (
//     <div>
//       <h2>Two : {props.value.id}</h2>
//       <strong>Two : {props.value.name}</strong>
//     </div>
//   );
// };

// export default App;

const App = () => {
  return (
    <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
  );
};

const HelloLicat = ({value:{name, id}}) => {
  return (
    <div>
      <h2>{id}</h2>
      <strong>{name}</strong>
      <HelloLicatTwo value={{name, id}}/>
    </div>
  );
};

const HelloLicatTwo = ({value:{name, id}}) => {
  return (
    <div>
      <h2>Two : {id}</h2>
      <strong>Two : {name}</strong>
    </div>
  );
};

export default App;