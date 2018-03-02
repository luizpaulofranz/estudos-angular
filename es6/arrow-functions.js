const precos = [12.5,15.90,81.90];

/**
 * A funcao Map percorre todo o array e retorna cada uma das suas posicoes, com as alteracoes que fizermos
 * A funcao Filter, retorna apenas as posicoes que cumprirem com as condicoes
 */

//jeito normal de fazer, sem arrow functions
//a funcao map retorna cada um dos valores do array e passa como parametro para a funcao interna
/*
const precoReais = precos.map(function(preco){
	//mais um recurso do ES6
	return `R$ ${preco}`;
});
*/

//arrou function 1
/*
const precoReais = precos.map( preco => {
	return `R$ ${preco}`;
});
*/

//arrou function 2
const precoReais = precos.map(preco=>`R$ ${preco}`);
//essa funcionalidade com o operador `` eh chamado template string
//outro recurso do ES6
console.log(`Log 1: ${precoReais}`);

//aqui filtramos o vetor com arrow funcions
//passamos o preco como parametro, chamamos uma funcao (com o simbolo =>) e usamos o
//proprio preco para analizar uma condicao
//const precosAltos = precos.filter(preco => preco>20 );

//alem disso, eu poderia concatenar essas functions, filtrando e formatando o meu resultado
const precosAltos = precos.filter(preco => preco>20 ).map(preco=>`R$ ${preco}`);

console.log(`Log 2 Precos acima de 20: ${precosAltos}`);
