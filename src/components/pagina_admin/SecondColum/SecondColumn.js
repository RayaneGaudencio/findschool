import styled from "styled-components";

const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    & > div:nth-child(1) {
        padding: 1.5em;
    }

    & > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        width: 100%;
    }
`

export default SecondColumn