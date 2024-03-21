import{useEffect, useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);
    // const handleCountUp = (e) => {}
    function handleCountUp(e){
        setCount(count + 1 );
    }

    // count가 변할때마다 감시(체크)하겠다.
    // useEffect는 state를 지정하여 해당 state가 변경되었음을 감지하면 함수를 실행시켜준다.
    // state는 여러개 넣을 수 있음. 
    // [count] 부분에 [count, a, b, c] 이런 식으로 사용한다.
    // return에서 재렌더링 전에 clean-up을 해줘야함. 잘못될 경우 무한 반복되는 둥 문제 발생여지가 있음.
    useEffect(()=>{
        if(bool){
            if(count % 2 == 0){
                alert("홀수");
            }else{
                alert("짝수");
            }
        }
        setBool(true);
    }, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
    </>
  )
}
