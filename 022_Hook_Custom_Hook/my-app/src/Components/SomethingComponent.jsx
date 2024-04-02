import React from 'react';
import useInput from '../Hook/useInput';

function SomethingComponent() {
    // useInput을 import하고, useState가 아닌 useInput으로 초기값을 설정해줌
    const [value, onChange] = useInput("");
    return (
        <>
	        <input type="text" onChange={onChange}/>
	        <div>
		        {value}가 강해졌다 돌격해!
	        </div>
        </>
    )
}
export default SomethingComponent;