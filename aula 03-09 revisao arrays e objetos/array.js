//criando um array
const arr = [2, 3, 4]
let numero
console.log(arr)
arr.push(7) //adiciona o elemento
console.log(arr)
numero = arr.pop() //remove o elemento e retorna
console.log(arr)

//percorrer o array usando for
for(let i = 0; i < arr.length; i++){
    console.log(`O valor no índice ${i} é ${arr[i]} `)
}

//percorrendo usando o for-of
console.log("for-of: ")
for(let valor of arr){
    console.log(`O valor é ${valor}`)
}

console.log(valor)

/*Atividade - Faça um programa que crie e leia 5 valores de preços de produtos de uma loja. Após a leitura desses valores, percorra o vetor e imprima a soma de valores desses produtos. Além disso, imprima também o índice onde está o produto mais caro.*/