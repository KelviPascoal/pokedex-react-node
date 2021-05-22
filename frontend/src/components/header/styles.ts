import styled from "styled-components";

export const Container = styled.div`
background-color: black;
height: 4rem;
margin-bottom: 1rem;

display: flex;
justify-content: center;

button {
    height: 4rem;
    width: 5rem;
    font-size: 12px;
    color: #008B45;
    border-bottom: 1px solid #00FA9A;
    &:hover {
        background-color: #00FA9A;
        color: #fff;
    }
    
}
`;