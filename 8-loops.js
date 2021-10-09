console.log("\nTrabalhando com condicionais");

const listaDeDestinos = new Array ( //Contrutor da lista
    "Salvador",
    "São Paulo",
    "Rio de Janeiro"
);

const idadeComprador = 16;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\nDestinos possíveis");
console.log(listaDeDestinos);



const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let cont = 0;
let destinoExiste = false;

while(cont < 3){
    
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
        break;
    }

    cont++;
}

console.log("Destino existe: ", destinoExiste);

if (podeComprar && destinoExiste){
    console.log("Boa Viagem");
} else{
    console.log("Desculpe, tivemos um erro");
}

for(let i=0;i<3;i++){
    
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break;
    }
}