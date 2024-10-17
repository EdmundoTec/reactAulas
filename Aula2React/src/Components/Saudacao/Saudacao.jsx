function Saudacao (props) {
    return <h1>Olá, {props.nome}! Seu saldo é R${props.saldo}</h1>
}

export default Saudacao;


{/* <Saudacao nome="Eddy" saldo={saldo2}/> */}