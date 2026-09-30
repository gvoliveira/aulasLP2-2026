/*Escreva um programa completo para análise de uma turma contendo três
funções:
a) verificarAprovacao(nota): retorna true se a nota for ≥ 60 e false caso
contrário.
b) contarAprovados(listaAlunos): recebe um array de objetos (onde cada
objeto é um aluno com {nome, nota}). Percorre a lista, chama a função
verificarAprovacao para cada aluno e retorna o total de alunos aprovados.
c) executarAnalise(): função principal que solicita via prompt o cadastro de 4
alunos (armazenando-os num array de objetos), chama contarAprovados e
exibe o total de aprovados no console.log.

Objeto Aluno {
nome
nota}
f1 -> recebe nota e retorna true ou false
f2 -> recebe array de aluno e retorna numero de aprovados
f3 -> imprime o numero de aprovados
f4 -> preenche os alunos e chama a f3*/

function preencheAlunos(){
    const turma = []
    for(let i = 0; i < 4; i++){
        let aluno = {
            nome: prompt("Digite o nome do aluno"),
            nota: Number(prompt("Digite a nota do aluno ")+aluno.nome)
        }
        turma.push(aluno)
    }
    return turma
}

function verificarAprovacao(nota){
    if(nota >= 60){
        return true
    }else{
        return false
    }
}
function contarAprovados(turma){
   let totalAprovados = 0
   for(let aluno of turma){
        let retorno = verificarAprovacao(aluno.nota)
        if(retorno == true){
            totalAprovados++
        }
   }
    return totalAprovados
}

function executarAnalise(){
    let turma = preencheAlunos()
    let numeroAprovados = contarAprovados(turma)
    alert(numeroAprovados)
    //modificar a funcao de imprimir aprovados, onde alem de imrpimri o numero, tambem imprime os nomes de quem foi aprovado
}

executarAnalise()
