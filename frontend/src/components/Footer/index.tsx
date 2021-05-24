import { Container } from './styles'

export function Footer(props: any) {

    return (
        <Container>
            <h2>{props.textFooter}</h2>
            <img src={props.imageFooter} alt="pikachu" />
        </Container>
    )
}