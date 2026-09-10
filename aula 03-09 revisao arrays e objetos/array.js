/*Atividade - Faça um programa que crie e leia 5 valores de preços de produtos de uma loja. Após a leitura desses valores, percorra o vetor e imprima a soma de valores desses produtos. Além disso, imprima também o índice onde está o produto mais caro.
Entrada - preços (5) array
Processamento - soma dos produtos, encontrar índice mais caro
Saída - resultados armazenados pelo processamento
*/
const precos = [];
const tamanho = 5;
for(let i = 0; i < tamanho; i++){
    let preco = Number(prompt("Digite o preco do produto: "))
    precos.push(preco)
}
let totalProdutos = 0.0, 
precoMaisCaro = precos[0], 
indiceMaisCaro = 0;

for(let i = 0; i < tamanho; i++){
    totalProdutos += precos[i] 

    if(precos[i] > precoMaisCaro){
        precoMaisCaro = precos[i]
        indiceMaisCaro = i
    }
}

alert(`O valor total dos produtos é ${totalProdutos}. O produto mais caro está no índice ${indiceMaisCaro}`)
