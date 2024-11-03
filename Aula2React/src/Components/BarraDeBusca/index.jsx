import React, { useState } from "react";
import styles from "./barra.module.css"

function SearchBar() {
    const [query, setQuery] = useState("");

    const handleSearch = (event) => {
        event.preventDefault(); // Evita o recarregamento da página
        console.log("Buscando:", query);
        // Aqui você pode adicionar a lógica para realizar a busca
        // Por exemplo, chamar uma API ou filtrar dados
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="Buscar produto..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Campo de busca"
                className={styles.barraInput}
                class={styles.barraIcon}
            />
        </form>
    );
}

export default SearchBar;
