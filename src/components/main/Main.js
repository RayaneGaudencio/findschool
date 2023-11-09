import styled from "styled-components";

const DivMain = styled.main`
    width: 100%;
    height: 100%;
`

const Main = ({ children }) => {
    return (
        <DivMain>
            {children}
        </DivMain>
    )
}

export default Main