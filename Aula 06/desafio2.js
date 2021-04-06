/*
Imput de informações no objeto a ser clonado.
*/
var pessoa = {
    nome: "",
    idade: 0,
    sexo: "",

}


//validação de dados

pessoa.nome = prompt("Digite seu nome");

    while (pessoa.nome == null) {
        pessoa.nome = prompt("Por favor, digite seu nome");
    }
pessoa.idade = validarNumero(parseInt(prompt("Digite sua idade")), parseInt, "sua idade");

function validarNumero(primeiroParametro, segundoParamentro, terceiroParamentro){

    while(isNaN(primeiroParametro)){
        primeiroParametro = segundoParamentro(prompt(`Por favor, digite ${terceiroParamentro}`))
    }
    return primeiroParametro
}




pessoa.sexo = prompt("Digite seu sexo: ").toLowerCase();
    let valorSexo = true;

    while (valorSexo == true) {
        if (pessoa.sexo == "masculino" || pessoa.sexo == "feminino") {
            valorSexo = false;
        } else {
            pessoa.sexo = prompt("Por favor, digite seu sexo: ").toLowerCase();
            valorSexo = true;
        }
    }



// escrita na tela objeto principal
document.write("PESSOA CADASTRADA", "<br>");
document.write(pessoa.nome, "<br>");
document.write(pessoa.idade, "<br>");
document.write(pessoa.sexo);

//alterações de dados

var alteração = validarNumero (parseInt(prompt("Sr(A). usuário(A), deseja realizar alguma alteração em seus dados cadastrais? 1 - SIM ; 2 - NÃO: ")),parseInt, "sim - não");
if (alteração == 2){
    document.write("<BR> SEUS DADOS FORAM INALTERADOS", "<br>");


}else {
    document.write("<br>FODA-SE, vai alterar porra nenhuma");



}