import React from "react";
import styled, {css} from "styled-components";

// 2개의 style을 합친 새로운 style을 적용 
const One = css`
    color: red;
`;

const Two = css`
    border : 1px solid black;
`;

const Three = styled.div`
    ${One}
    ${Two}
`;

const App = () => {
	return (
        <Three>
            Lorem ipsum dolor
        </Three>
	);
};

export default App;