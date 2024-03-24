import React, { useState, useEffect } from 'react';

export default function Time(props) {
  const [today, setToday] = useState(new Date());
  const [hour, setHour] = useState(today.getHours());
  const [min, setMin] = useState(today.getMinutes());
  const [sec, setSec] = useState(today.getSeconds());
  //렌더링 확인용
  console.log("렌더링 :D")
    // 컴포넌트 렌더링이 끝난 후 useEffect가 실행된다.
    // => update될때 또한 컴포넌트의 리렌더링이 완료된 후 useEffect가 실행
    // log를 확인하면 렌더링 -> Time End -> Timer//  렌더링 -> Time End -> clean up! -> Timer 반복
    useEffect(() => {
        console.log("Timer!");
       let currentTime = setInterval(() => {           
            setToday(new Date());
            setHour(today.getHours());
            setMin(today.getMinutes());
            setSec(today.getSeconds());
         }, 1000);
         return() => {
            clearInterval(currentTime);
            //clearInterval을 안하면 시간이 계속 set되므로, 번쩍이며(?) 계속 다시 로딩된다.
            // 컴포넌트가 실행되기 직전에 반복동작을 삭제하는 부분
            console.log("clean up!");
         }
        }, [today])

        //렌더링 확인용
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
