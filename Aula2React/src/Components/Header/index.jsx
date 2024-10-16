import styles from './Header.module.css'

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
                <a href="">Home</a>
                <a href="">Produtos</a>
                <a href="">Categoria</a>
                <a href="">Meus Produtos</a>
            </div>
        </header>
    )
}

export default Header;
