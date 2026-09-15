function imprimeOla(nome){
    alert(`
        ---------------\n
        Olá ${nome}!\n
        ---------------`)
}
function leNome(){
    let pNome = prompt("Digite seu nome: ")
    return pNome
}

let nomeSalvo = leNome()
imprimeOla(nomeSalvo)