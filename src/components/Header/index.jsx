import '../Header/styles.css'
import Logo from '../../../public/logo.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {

    const navigate = useNavigate()

    return (
        <header>
            <button onClick={() => navigate('/')}><img src={Logo} alt="logoh" /></button>
            <button onClick={() => navigate('/createEntitys')}>Cadastrar nova Empresa</button>
        </header>
    )
}