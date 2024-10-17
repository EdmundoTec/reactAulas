import React, { useState, useEffect } from 'react';
import stales from '../ListaTenis/styles.modules.css'

function ListaDeTenis() {
  const [tenis, setTenis] = useState([]);

  useEffect(() => {
    async function name(params) {
      const resposta = await fetch('https://api-story-dolw.onrender.com/shoes')
      const imagemTenis = resposta.json();

      setTenis(imagemTenis);
    }
    carregarTenis();
  }, []);


  return (
    <>
        <ul>
            {tenis.map(tenis =>(
                <li>
                    <img src="{tenis.imsgem.url}" className='' alt="" />
                </li>
            ))}
        </ul>
    </>
  )
  }

  export default ListaDeTenis;
