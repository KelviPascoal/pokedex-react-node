import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function Button(props: ButtonProps) {
    const { children, ...rest } = props;
    return (
        <Container {...rest}>{children}</Container>
    )
}