/**
 * 1° Manter sempre o código alinhado e identado.
 * 2° Escrever todas as variáveis em camelCase: 
 * 3° Escrever todas as funções em camelCase: 
 * 4° Sempre manter as Siglas em maiúsculas.
 * 5° Dar nomes sujestivos as variáveis sobre o que elas vão armazenar.
 * 6° Separar as responsabilidades,
 * 7° Nunca declarar a mesma variável em vários lugares diferentes.
 */


// var numero  = prompt('Digite um número para saber se é par ou impar');

// var resultado = calcularParOuImpar(numero)

// document.write(resultado);

// --------------------

// function calcularImpostoDeRenda(salario){

// }

// function calcularGET(){
//     var a = 0;

//     if(true){
//         a = 10 * 5;

//     }else if(true){
//         a = 10 * 7;

//     }else{
//         a = 10 * 10;
//     }

//     return a;
   
// }


// var valorGET = calcularGET();





// var frutasQueEuGosto = ['Banana', 'Pêra', 'Uva', 'Abacaxi', 'Abacate']

// for(var fruta of frutasQueEuGosto){

//     switch (fruta.toLowerCase()) {
//         case "banana": alert('Banana é rico em potácio.'); break;
//         case "pêra": alert('Pêra é uma fruta rica em fribras.'); break;
//         case "uva": alert('É da Uva que se faz o vinho.'); break;
//         default: alert('Sou uma outra fruta qualquer - ' +  fruta); break;
//     }

// }




// for(var fruta of frutasQueEuGosto){

//     if(fruta.toLowerCase() == "banana") {
//          alert('Banana é rico em potácio.');

//     } else if(fruta.toLowerCase() == "pêra") {
//         alert('Pêra é uma fruta rica em fribras.');

//     } else if(fruta.toLowerCase() == "uva") {
//         alert('É da uma que se faz o vinho.');

//     } else{
//         alert('Sou uma outra fruta qualquer');
//     }

// }


/**
 * Escopos: 
 *  * Escopo Global
 *  * Escopo de Funcao
 *  * Escopo de bloco
 * 
 */

// let nome = "Fulano"; // Isso é escopo Global.


// function escrever(){
//     // Aqui é um escopo de função, só a função tem acesso.
//     let nome = "Beltrano";
//     let batatinha = "123";
//     let nome = "José";
//     document.write(nome + "<br>"); 
// }

// document.write(nome + "<br>"); // Escrever Fulano lá na tela.

// if(true){
//     // ISSO É ESCOPO DE BLOCO
//     let nome = 'Ciclano';
//     // let nome = 'CiclanoA'; // Aqui vai error :(
//     document.write(nome + "<br>"); // Escrever Ciclano lá na tela.
// }
// if(true){
//     // ISSO É ESCOPO DE BLOCO
//     let nome = 'Amanda';
//     document.write(nome + "<br>"); // Escrever Amanda lá na tela.
// }

// escrever();// Escrever Beltrano lá na tela. 
// document.write(nome + "<br>"); // Escrever Ciclano lá na tela.
// document.write(batatinha + "<br>"); // undefined


// const aliquotaAumentoDeSalario = 0.05;

// nome = "Ciclano";

// document.write(nome + "<br>"); 


// // Não acontece referencia, o valor é flat, simples.
// var nome = "Maria";
// var nome2 = nome;
// var nome2 = "Pedro";

// var pessoa = {
//     nome: "Fulano",
//     idade: 21,
//     salario: 1000.00
// }

// // Aqui ele não passa o valor e sim a referencia, a posição na memoria.
// // var pessoa2 = pessoa;

// var pessoa2 = Object.assign({}, pessoa);


// document.write(`Pessoa - Nome: ${pessoa.nome} - Salario: ${pessoa.salario} <br>`);
// document.write(`Pessoa2 - Nome: ${pessoa2.nome} - Salario: ${pessoa2.salario} <br>`);

// document.write('<br><br>');

// pessoa2.salario += pessoa2.salario * 0.05;

// document.write(`Pessoa - Nome: ${pessoa.nome} - Salario: ${pessoa.salario} <br>`);
// document.write(`Pessoa2 - Nome: ${pessoa2.nome} - Salario: ${pessoa2.salario} <br>`);


// const nome = "Maria";
// nome = "José"; // Vai dar ruim ... 
const pessoa = {
    nome: "Fulano",
    idade: 21,
    salario: 1000.00
}

pessoa.salario = 5000.00;

document.write(pessoa.salario);

var pessoa2 = Object.assign(pessoa, { preferencias: [] });

pessoa = { id: 1};
