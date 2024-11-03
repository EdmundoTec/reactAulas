import React, { useState } from "react";
import styles from "./carrinho.module.css"

function Carrinho() {
    const [query, setQuery] = useState("");

    const handleSearch = (event) => {
        event.preventDefault(); // Evita o recarregamento da página
        console.log("Buscando:", query);
        // Aqui você pode adicionar a lógica para realizar a busca
        // Por exemplo, chamar uma API ou filtrar dados
    };

    return (
        <form onSubmit={handleSearch}>
            <button
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Campo de busca"
                className={styles.barraInput}
                class={styles.carrinhoIcon}
            />
        </form>
    );
}

export default Carrinho;
