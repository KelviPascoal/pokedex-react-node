import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    a {
        text-decoration: none;
        
    }
    button {
        cursor: pointer;
}

    body {
        background-color: #cfd5e2;    
    
    }
    }

    :root{
        --normal: #B2DFEE;
        --fighting: #E9967A;
        --flying: #AFEEEE;
        --poison: #7d528d;
        --ground: #A2CD5A;
        --rock: #8B7D6B;
        --bug: #434c5b;
        --ghost: #1C1C1C;
        --steel: #BCD2EE;
        --fire: #fb6c6c;
        --water: #77befe;
        --grass: #46d1b1;
        --electric: #ffcf4a;
        --psychic: #7B68EE;
        --ice: #ADD8E6;
        --dragon: #9c2525;
        --dark: #131313;
        --fairy: #EE7AE9;
        --unknown: #D3D3D3;
        --shadow: #551A8B;
    }
    


`;