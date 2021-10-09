console.log("Trabalhando com listas");
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array ( //Contrutor da lista
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

//Mesmo sendo uma const eu posso adicionar elementas à lista
listaDeDestinos.push("Curitiba"); //adiciona um item à lista

console.log("Destinos possíveis");
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //(posição inicial, quantidade a ser removida) 

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);





