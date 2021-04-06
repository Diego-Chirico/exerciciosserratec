var valor = prompt("Digite a numero que deseja multiplicar")
var quantidade = prompt("Digite até qual numero deseja calcular deseja calcular")


eNumero(valor)
eNumero(quantidade)

function eNumero(numero) {
    while (isNaN(numero)) {
        if (isNaN(numero)) {
            alert(`Você digitou: ${numero}, por favor, digite apenas números`)
            numero = prompt("Digite a numero que deseja multiplicar")
        }
    }
}
Number(valor)
Number(quantidade)


for (var cont = 0; cont <= quantidade; cont++) {
    var resposta = valor * cont;
    document.write(`O número ${valor} multiplicado por ${cont} é igual a: ${resposta} <br>`)

}