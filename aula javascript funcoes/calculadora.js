//Faca um programa que receba como entrada o tipo de operação que deseja realizar: 1-Soma 2-Subtração 3-Multiplicação 5-Sair
function soma(a, b){
    let resultado = a + b
    return resultado
}

function mostraResultado(valor){
    alert(`O resultado do calculo foi: ${valor}`)
}

let operacao = Number(prompt(`Digite a operação \n1-Soma
   \n2- Subtracao
   \n3-Multiplicacao`))
   let n1, n2, result
    if(operacao >= 1 && operacao < 4){
        n1 = Number(prompt("Digite o numero 1"))
        n2 = Number(prompt("Digite o numero 2"))
    }
   switch(operacao){
    case 1: result = soma(n1, n2)
            break;
    case 2: subtrai(n1,n2)
            break;
    case 3: multiplica(n1,n2)
            break;
   }
   mostraResultado(result)
