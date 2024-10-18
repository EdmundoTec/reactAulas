import styles from './Header.module.css'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerTop}>
                <span>Icone</span>
                <nav>
                    <a href="">Barra de Busca</a>
                    <a href="">Link Cadastre-se</a>
                    <a href="">Botão</a>
                    <a href="">Carrinho</a>
                </nav>
            </div>
            <div className={styles.headerBottom}>

                <Link to='/home'>Home</Link>
                <Link to='/home'>Produtos</Link>
                <Link to='/home'>Categoria</Link>
                <Link to='/home'>Meus Produtos</Link>
                <Link to='/login'>Login</Link>
                
            </div>
        </header>
    )
}

export default Header;
