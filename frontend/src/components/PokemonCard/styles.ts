import styled from 'styled-components';

export const Container = styled.div`
    background-color: #48D1CC;
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
        padding-bottom: 20%;

        display: flex;
        flex-direction: column;
        align-items: center;

        .container-image {
                width: 240px;
                background-color: #40E0D0;
                border-radius: 50%;

                display: flex;
                justify-content: center;
                img {
                    width: 200px;

                } 
        }

    strong {
        color: #fff;
        font-size: 28px;
    }

    span {
        color: #fff;
        font-size: 18px;

    }

`;