

let cep = prompt("Digite o cep")
//verificar se tem erros

const urlEndpoint = `https://viacep.com.br/ws/${cep}/json/`

fetch(urlEndpoint)
.then(resposta => resposta.json())
.then(dados => {
    
    console.log(dados)
    const divEndereco = document.getElementById("endereco")
    const rua = document.createElement("h2")
    const bairro = document.createElement("h3")
    rua.innerText = dados.logradouro
    rua.classList.add("destaque")
    bairro.innerText = dados.bairro
    divEndereco.append(rua, bairro)

} )