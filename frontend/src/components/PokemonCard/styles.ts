import styled, { css } from 'styled-components';

interface TypeColor {
    bgColor: string;
}

export const Container = styled.div<TypeColor>`

    cursor: pointer;

    ${(props) => props && css`
        background-color: var(--${props.bgColor});
        `}

    height: 400px;
    width: 260px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    header {
        padding: 0 16px;
        
        display: flex;
        justify-content: space-between;

        button {
            border: 0;
            background-color: transparent;
            color: white;
        }

        span {
            color: #fff;
        }
    }
`;

export const PokemonInfo = styled.div`
        padding-bottom: 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        .container-image {
                margin-bottom: 10%;

                width: 240px;
                background-color:  rgba(255,255,255, .1);
                border-radius: 50%;

                display: flex;
                justify-content: center;
                img {
                    width: 200px;
                } 
        }

        .container-contant{
            background-color: rgba(1, 1, 1, .2);
            border-radius: 8px;
            padding: 8px 16px;

            display: flex;
            flex-direction: column;
            align-items: center;

            strong {
                color: #fff;
                font-size: 28px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                
                    &:first-letter {
                    text-transform: capitalize;
                    }
            }

            span {
                color: #fff;
                font-size: 18px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

                    &:first-letter {
                        text-transform: capitalize;
                    }
            }
        }

    
`;