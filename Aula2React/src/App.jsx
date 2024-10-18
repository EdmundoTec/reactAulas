import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import NavbarComponent from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Saudacao from './Components/saudacao/saudacao'
import BotaoDinamico from './Components/BotaoDinamico/BotaoDinamico'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import { useEffect, useState } from 'react'

function App() {
  //  const [count, setCount] = useState([]);

  //  useEffect(() => {
  //   async function carregarTenis() {
  //     const resposta = await fetch('https://api-store-dolw.onrender.com/shoes')
  //     const imagemTenis = await resposta.json();

  //     setTenis(imagemTenis);
  //   }
  //   carregarTenis();
  //  }, []);

  return (
    <>

      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='*' element={<HomePage/>}/>
            {/* Garante que outras rotas não rastreadas retornem pra o Home */}
          </Routes>
        </div>
      </Router>


      {/* const enviarDados = () => {
        alert('Enviando com Sucesso')
      }
        const deletarDados = () => {
         alert('Deletado com Sucesso')
        }

        const saldo = 100
        const saldo2 = 120 */}

      {/* <Saudacao nome="Fulano" saldo={saldo}/>
      <Saudacao nome="Eddy" saldo={saldo2}/>
      <BotaoDinamico cor='blue' click={enviarDados}>Enviar</BotaoDinamico>
      <BotaoDinamico cor='red' click={deletarDados}>Deletar</BotaoDinamico> */}

      {/* <NavbarComponent /> */}

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
   )
}

export default App;
