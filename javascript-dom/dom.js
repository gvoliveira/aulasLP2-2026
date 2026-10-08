//cria uma variável com o elemtento h2 do html
const H2elemento = document.getElementById("substitulo")

H2elemento.innerText = "Olá Mundo!"

const topicosElemento = document.getElementById("topicos")
topicosElemento.innerHTML = `<h3>getElementById</h3>
                             <p> Busca um elemento a partir do seu identificador único </p>`

topicosElemento.classList.add("card")

//puxar o botao do html para o js, adicionar um evento no botao para qd ele for clicado, ele puxar o nome do input e imprimir como h3
const botaoImprime = document.getElementById("imprime")// pega o elemento botão do html

//add o ouvinte de click do mouse no botão, caso seja clicado, chama a função que pega o value (valor) do campo input. 
botaoImprime.addEventListener("click", () => {
    const entrada = document.getElementById("nome").value
    const mensagemEle = document.getElementById("mensagem")
    //imprime a msg Bom dia, Nome do Input (se houver)
    if(entrada)
       mensagemEle.innerText = `Bom dia, ${entrada}!`     
})