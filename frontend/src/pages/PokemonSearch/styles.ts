import { PokemonCard } from './../../components/PokemonCard';
import styled from "styled-components";

export const Form = styled.form`
background-color: #df323b;
padding-bottom: 16px;
margin-bottom: 24px;

display: flex;
justify-content: center;
align-items: center;


`;


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    a {
        margin-right: auto;

        .button-back{
        background-color: transparent;
        border: 0;
        font-size: 18px;
        color: #303030;
        padding: 4px 2px;
        border-radius: 8px;
        
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background-color: rgba(1, 1 , 1, .1);
        }}

    }
    
        .button-save {
        position: absolute;
        margin-bottom: 420px;
        background-color: #40df9f;
        border: 0;
        font-size: 18px;
        color: #fff;
        padding: 4px 16px;
        border-radius: 8px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
        filter: brightness(0.8);
        }   
        
    }

    .pokebola {
        border-radius: 8px;
        width: 680px;
    }
`;
