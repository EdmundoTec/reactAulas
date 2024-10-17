import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import NavbarComponent from './Components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Saudacao from './Components/saudacao/saudacao'
import BotaoDinamico from './Components/BotaoDinamico/BotaoDinamico'

function App() {
  const enviarDados = () => {
    alert('Enviando com Sucesso')
  }
  const deletarDados = () => {
    alert('Deletado com Sucesso')
  }

  const saldo = 100
  const saldo2 = 120

  return (
    <>
      <Header />
      <Saudacao nome="Fulano" saldo={saldo}/>
      <Saudacao nome="Eddy" saldo={saldo2}/>
      <BotaoDinamico cor='blue' click={enviarDados}>Enviar</BotaoDinamico>
      <BotaoDinamico cor='red' click={deletarDados}>Deletar</BotaoDinamico>

      {/* <NavbarComponent />
        <div>
          <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" /></a>
          <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" /></a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button>count is</button>
          <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
   )
}

export default App;
