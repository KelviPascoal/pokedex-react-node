import styled from "styled-components";


export const Form = styled.form`
    margin-bottom: 8px;
    background-color: #df323b;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 8px;
    margin-bottom: 24px;


    Button {
            height: 26px;
        }
`;

export const Pokedex = styled.div`
    header {
        display: flex;
        justify-content: center;

        button {
            height: 3rem;
            width: 3rem;
            border-radius: 8px;
            border: 0;
            margin: 16px 8px;
        }
        .red-button {
            background-color: #bf2626;
        }
        .green-button {
            background-color: #4dad5b;
        }
    }

        
     
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    .imgContainer{
            border: 2px solid #30a7d7;
            border-radius: 8px 0 0 8px;
            display: flex;
            justify-content: center;

            img{
            height: 380px;
            max-width: 380px;
            border-radius: 8px;
            }
            
            }
        
            
        
        .PokemonInfo {
            height: 380px;
            width: 300px;
            border: 2px solid #30a7d7;
            border-radius: 0 8px 8px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background-color: #30a7d7;

            
            p {

                strong {
                color: #212121;
                font-size: 28px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    &:first-letter {
                    text-transform: capitalize;
                    }
                
                display: flex;
                justify-content: center;
                align-items: center;
            }

            span {
                padding: 0 8px;
                color: #fff;
                font-size: 16px;
                border-radius: 8px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    &:first-letter {
                    text-transform: capitalize;
                    }
                
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

            }
           
`;

