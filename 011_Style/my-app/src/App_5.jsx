import React from "react";
import styled from "styled-components";

const ContentOne = styled.div`
    margin: 40px;
`;

const ContentTwo = styled.div`
    color:red;
`;

//ContentTwo의 속성을 가져와서 확장해서 사용하고 있는 것.
const ContentThree = styled(ContentTwo)`
    border: 1px solid black;
`

function App() {
    return (
        <div>
            <ContentOne>hello world</ContentOne>
            <ContentTwo>hello world</ContentTwo>
            <ContentThree>hello world</ContentThree>
        </div>
    );

}
export default App;