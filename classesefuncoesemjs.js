//Nessa estrutura de objeto, não tem como criar um novo livro, ou passar parâmetro. É um objeto literal.
//Não possivel utilizar como uma estrutura para criar N livros

// const Livro = {
//     nome: "React Native",
//     editora: "Casa do Código",
//     paginas: 185,
//     anunciar: function(){
//         console.log("A Alura indica o livro " + this.nome + "!");
//     }

// }
// Livro.anunciar();




// //É uma função que faz o papel de uma classe, pois classe é o nome que a gente dá pras estruturas que a gente usa para criar objetos
// const Livro = function(nome, editora, paginas){
//     gNome = nome,
//     gEditora = editora,
//     gPaginas = paginas,

//     this.getNome = function(){
//         return gNome;
//     }

//     this.getEditora = function(){
//         return gEditora;
//     }

//     this.getPaginas = function(){
//         return gPaginas;
//     }
// }

// const GraphQL = new Livro("GraphQL", "Casa do Código", 143);
// console.log(GraphQL.getNome());
// console.log(GraphQL.getEditora());
// console.log(GraphQL.getPaginas());



// //prototype
// const nome = "Alura";
// //por baixo dos panos os JS faz algo similiar a isso
// //ele instancia uma nova string e ela carrega com ela todos os métodos e propriedade do tipo String
// const temporario = new String(nome);
// console.log(temporatio.toString());



//Com o ES6, veio a possibilidade de criar classes
//Escrevendo a função livro, utilizando classes

class Livro {
    constructor(nome, editora, paginas){
        this.nome = nome;
        this.editora = editora;
        this.paginas = paginas
    }

    anunciarTitulo(){
        console.log(`Título: ${this.nome}`);
    }

    descreverTítulo(){
        console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas.`);
    }
}

// const NodeJS = new Livro("Primeiros passos com NodeJS", "Casa do Código", 195);
// NodeJS.anunciarTitulo();
// NodeJS.descreverTítulo();

//classes também são funções
//classe não são hoisted - não consigo chamar uma classe(instanciar um novo objeto), sem antes declarar essa classe.
// console.log(typeof Livro);


//Herança - utiliza a palavra chave "extends", para fazer com que essa classe herde propriedades da classe livro
// super é a palavra chave para receber a propriedade da classe livro
class LivroColecao extends Livro{
    constructor(nome, nomeColecao){
        super(nome),
        this.nomeColecao = nomeColecao;
    }

    descreverColecao(){
        console.log(`O livro ${this.nome} faz parte da coleção ${this.nomeColecao}`);
    }
}

const LogicaDeProgramacao = new LivroColecao("Lógica de Programação", "Comece a Programar");
LogicaDeProgramacao.descreverColecao();



