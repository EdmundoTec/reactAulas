import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Logo from '../Logo/index'
import SearchBar from "../BarraDeBusca/index";
import Carrinho from '../carrinhoDeCompras';
function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <span>
                <Logo/>
                </span>
                <nav>
                    <SearchBar /> {/*  Barra De Busca */}
                    <a href="https://digitalcollege.com.br/">Cadastre-se</a>
                    <a href="https://digitalcollege.com.br/">Entrar</a>
                    <Carrinho/>
                    
                </nav>
            </div>
            <div className={styles.headerBottom}>

                <Link to='/home'>Home</Link>
                <Link to='/Products'>Produtos</Link>
                <Link to='/categorias'>Categoria</Link>
                <Link to='/meus-produtos'>Meus Produtos</Link>
                
            </div>
        </header>
    )
}

export default Header;
