import { InputHTMLAttributes } from "react";
import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }

export function Input(props: InputProps) {
    const { ...rest } = props;
    return (
        <Container {...rest} placeholder="Nome ou numero do pokemon" />
    )
}