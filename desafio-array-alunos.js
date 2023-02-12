//crie um array indicando a quantidade de itens, sem adicionar itens ao array
//Após criar o array com seu respectivo tamanho, faça com que cada índice do array seja multiplicado por 2, ao final exiba o resultado.
let valores = Array(5);

for(let i = 0; i < valores.length; i++){
    valores[i] = i * 2
};
console.log(valores);

//crie um array com os respectivos valores 1,2,3,4,5 .
//Após criar o array utilize o método map para retornar um novo array o qual terá que ter cada valor multiplicado por 10, ao final exiba o novo array e o array antes da multiplicação.

let valoresDez = [1,2,3,4,5];

let valoresMultiplicados = valoresDez.map((itens)=>{
    let multiplicando = itens * 10
    return multiplicando
});
console.log(valoresDez);
console.log(valoresMultiplicados);
