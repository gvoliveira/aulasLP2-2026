/*Crie uma função chamada somarElementos que receba um array de números como parâmetro, percorra o vetor, some todos os valores e retorne o total.

f1(preenheArray) -> f2(soma o array) -> retorno e jogo numa funcao que imprime o resultado (f3)

E -> array que ja foi preenchido
P -> somatório dos elementos
S -> retornar o somatório
*/

function leValores(){
    const vetor = []
    let tam = Number(prompt("Digite quantos elementos tem o vetor: "))
    for(let i = 0; i < tam; i++){
        let v = Number(prompt("Digite o valor: "))
        vetor.push(v)
    }
    return vetor
}

function somarArray(vetor){
    let somatorio = 0
    for(let elementoAtual of vetor){
        somatorio = somatorio + elementoAtual
    }
    return somatorio
}

function imprimeTotal(t){
    alert(`O total da soma dos elemtnos do vetor é ${t}`)
}

const vetor = leValores() //array preenchido com sucesso
let total = somarArray(vetor)
imprimeTotal(total)