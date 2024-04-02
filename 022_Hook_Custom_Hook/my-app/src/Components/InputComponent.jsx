import React from 'react';
import useInput from '../Hook/useInput';

function InputComponent() {
    // useInput을 import하고, useState가 아닌 useInput으로 초기값을 설정해줌
    const [value, onChange] = useInput("");
    return (
        <>
            <input type="text" onChange={onChange}/>
            <div>
                {value}
            </div>
        </>
    )
}
export default InputComponent;