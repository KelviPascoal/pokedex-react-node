import styled from "styled-components";

export const Container = styled.div`
background-color: #AFEEEE;
margin: 0 auto;
width: 900px;
height: 400px;
border-radius: 20px;

display: flex;
justify-content: space-around;
align-items: center;

        .imgContainer{
            height: 280px;
            width: 380px;
            background-color: #fff;

            img{
            height: 280px;
            border-radius: 20px;
        }
}
        
        .PokemonInfo {
            height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        strong {
            color: #303030;
            font-size: 28px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

            &:first-letter {
            text-transform: capitalize;
            }
        }
        span {
            color: #303030;
            font-size: 22px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

            &:first-letter {
            text-transform: capitalize;
            }
        }
    }
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;
`;