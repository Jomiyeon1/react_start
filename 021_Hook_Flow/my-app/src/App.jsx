import React, { useEffect, useLayoutEffect, useState } from "react";

//  lifecycle과 hook은 별개
// flow를 알아보기 위해 임의로 만든 코드임.

// useLayoutEffect  - 페이지그려줌(paint ) - useEffect 
// clean up은 업데이트가 될 때, 언마운트 될 때 실행
// => unmount시 모두 실행(return_0)만 실행
function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  // useLayoutEffect [] 유무에 따라 순서가 바뀌는 게 아니고, 호출 순서에 따라 실행된다.
  useLayoutEffect(()=>{
    // , [] : 최초 1번 실행 
    console.log('useLayoutEffect 1')
    return () => {
      console.log('useLayoutEffect return_1')
    }
  }, [])

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 2')
    return () => {
      console.log('useLayoutEffect return_2')
    }
  })

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 3')
    return () => {
      console.log('useLayoutEffect return_3')
    }
  }, [num])

  useEffect(()=>{
    // , [] : 최초 1번 실행 
    console.log('useEffect 1')
    return () => {
      console.log('useEffect return_1')
    }
  }, [])

  useEffect(()=>{
    console.log('useEffect 2')
    return () => {
      console.log('useEffect return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect return_3')
    }
  }, [num])

  return (
    <button onClick={handleonClick}>{num}</button>
  );
}

const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap;