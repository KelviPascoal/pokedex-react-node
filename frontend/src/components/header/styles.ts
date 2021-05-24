import styled from "styled-components";

export const Container = styled.div`
height: 4rem;
margin-bottom: 1rem;
background-color: #c62828;
display: flex;
justify-content: space-between;

div{
    display: flex;
    align-items: center;

    img {
    height: 3rem;
    margin-left: 2rem;

    }
    h1 {
        color: #fff;
        margin-left: 1rem;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    }
    button {
        border: 0;
        background-color: transparent;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 22px;
        margin-right: 2rem;
        border-radius: 90px;
        padding: 16px;

        &:hover {
            background-color: rgba(1, 1, 1, .1);

        }

    }
}
`;