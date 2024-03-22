import React, { useState, useEffect } from 'react';

export default function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  console.log("렌더링 :D")//렌더링이 잘 되는지 확인용! 꼭 넣고 진행해주세요.
    // 컴포넌트 렌더링이 끝난 후 useEffect가 실행된다.
    // => update될때 또한 컴포넌트의 리렌더링이 완료된 후 useEffect가 실행
    // log를 확인하면 렌더링 -> Time End 후 Timer -> 렌더링 -> Time End -> clean up! 반복
    // 첫 렌더링 후 ( 렌더링 -> Time End ) useEffect(Timer) -> 재렌더링??(렌더링 -> Time End) -> clean up 순
    useEffect(() => {
       let currentTime = setInterval(() => {           
           console.log("Timer");
            setToday(new Date());
            setHour(today.getHours());
            setMin(today.getMinutes());
            setSec(today.getSeconds());
         }, 1000);
         return() => {
             clearInterval(currentTime);
            console.log("clean up!");
         }
        }, [today])
        console.log("Time End");

  return (
    <div>
      <hr/>
      <h1>
        시간 : {hour}시 {min}분 {sec}초
      </h1>
    </div>
  );
}
