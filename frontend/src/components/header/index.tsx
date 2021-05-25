import { Container } from './styles';
import pikachuSearch from '../../assets/pikachuSearch.png'
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";

export function Header() {
    return (
        <Container>
            <div className="container-logo">
                <img src={pikachuSearch} alt="" />
                <h1>Pokedex</h1>
            </div>
            <div className="container-menu">
                <Link to="/buscar"><button><FiPlus />Pokemons</button></Link>
            </div>
        </Container>
    )
}