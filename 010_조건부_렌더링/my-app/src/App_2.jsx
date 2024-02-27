function App() {
  return (
    //name 유무에 따른 차이점 확인하기.
    <div className="App">
    <Hello name='MiYeon'/>
     <Hello name=''/>
    </div>
  );
}

function Hello({name}){
  if(name){
    return(
      <One name={name}/>
    )
  }else{
    return(
      <Two/>
      )
  }    
    }
    function One({name}){
      return(  
        <>
          <h1>Hello {name} 🙌</h1>
        </>
      )    
    }

    function Two(){
      return(  
        <>
          <h1>이름을 입력하지 않았습니다!!</h1>
        </>
      )  
  }
    export default App;