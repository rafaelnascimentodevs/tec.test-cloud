import '../Header/styles.css';
import { useNavigate } from 'react-router-dom';

export function Header() {
    const navigate = useNavigate();

    return (
        <header className="headerContainer">
            <nav className="navLinks">
                <button onClick={() => navigate('/')} className="navButton">Empresas</button>
                <button onClick={() => navigate('/createEntitys')} className="navButton">Cadastrar nova Empresa</button>
            </nav>
        </header>
    );
}
