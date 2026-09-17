function verificaIdade(idade){
    if(idade < 18){
        return 0
    }else{
        return 1
    }
}
function catraca(){
    let id = Number(prompt("Digite sua idade"))
    if(verificaIdade(id)){
        console.log("ENtrada inteira")
    }else{
        console.log("Meia entrada")
    }
}

catraca()