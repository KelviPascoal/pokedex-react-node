import styled from "styled-components";

export const Container = styled.div`
height: 4rem;
display: flex;
justify-content: space-between;
background-color: #df323b;

    .container-logo{
        display: flex;
        align-items: center;
        
        margin-left: 2rem;         
        img {
            height: 3rem;
            }
        
        h1 {
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }

    .container-menu{
        margin-right: 2rem;
        display: flex;
        align-items: center;

        button {
            border: 0;
            background-color: transparent;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 18px;
            margin-right: 4px;
            border-radius: 6px;
            padding: 8px;
            background-color: rgba(1, 1, 1, .1);

            display: flex;
            justify-content: center;
            align-items: center;
            

            &:hover {
                background-color: rgba(1, 1, 1, .2);
            }
        }
    }
`;