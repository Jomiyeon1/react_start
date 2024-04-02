import { useState } from 'react';

// 훅의 이름은 항상 use[name]의 형식으로 작성.
function useInput(initState) {
    const [value, setValue] = useState(initState);
    function onChange(e) {
        setValue(e.target.value);
    }
    return [value, onChange];
}

export default useInput;