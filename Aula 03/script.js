//ARMAZERNAR INFORMAÇÕES

var usuario = [
    {
        nome: "",
        idade: 0,
        peso: 0,
        altura: 0,
        sexo: "",
        emagrecimento: 0,
        imc: 0,
        gebHomem: 0,
        caloriaTotal: 0,
        get: 0,
        nivelAtividade: 0,
        diasParaEmagrecer: 0,
    }
]

//TABELA GAF

var gaf = [
    {
        sedentario: 1.2,
        poucoAtivo: 1.375,
        moderado: 1.55,
        intenso: 1.725,
        muitoIntenso: 1.9
    }
];

//FUNÇÃO PARA CALCULA VALORES

function calcular() {

    // VARIAVEIS -- PEGAR INFORMAÇÕES E VALIDAR

    var nome = prompt("Digite seu nome");

    while (nome == null) {
        nome = prompt("Por favor, digite seu nome");
    }

    var idade = parseInt(prompt("Digite sua idade"));

    while (isNaN(idade)) {
        idade = parseInt(prompt("Por favor, digite sua idade"));
    }

    var peso = parseFloat(prompt("informe seu peso em kilos(KG): "));

    while (isNaN(peso)) {
        peso = parseFloat(prompt("Por favor, digite seu peso"));
    }

    var altura = parseFloat(prompt("informe sua altura em metros(m)"));

    while (isNaN(altura)) {
        altura = parseFloat(prompt("Por favor, digite sua altura"));
    }

    var sexo = prompt("Digite seu sexo: ").toLowerCase();
    var valorSexo = true;

    while (valorSexo == true) {
        if (sexo == "masculino" || sexo == "feminino") {
            valorSexo = false
        } else {
            sexo = prompt("Por favor, digite seu sexo: ").toLowerCase();
            valorSexo = true
        }
    }

    var emagrecimento = parseFloat(prompt("Informe quantos quilos pretende emagrecer: "));

    while (isNaN(emagrecimento)) {
        emagrecimento = parseFloat(prompt("Informe quantos quilos pretende emagrecer:"));
    }

    var nivelAtividade = parseInt(prompt("Digite de 1 a 5 o quão ativo você é, sendo: 1 =  a sendatario e 5 muito ativo"));
    var valorNivelAtividade = true

    while (valorNivelAtividade == true) {
        if (!isNaN(nivelAtividade) && nivelAtividade >= 1 && nivelAtividade <= 5) {
            valorNivelAtividade = false
        } else {
            nivelAtividade = parseInt(prompt("Digite de 1 a 5 o quão ativo você é, sendo: 1 =  a sendatario e 5 muito ativo"));
            valorNivelAtividade = true
        }
    }

    // VARIAVES COM VALOR DOS CALCULOS + CALCULOS E CONDIÇÕES

    var caloriaTotal = 7700 * emagrecimento;
    var imc = peso / (altura * altura)
    var gebHomem = parseInt(66.47 + (13.75 * peso) + (5 * altura) + (6.76 * idade));
    var gebMulher = parseInt(655.1 + (9.56 * peso) + (1.85 * altura) + (4.68 * idade));
    var pesoIdeal = 21.75 * altura * altura;
    var get = 0;

    // CONDIÇÕES

    if (sexo == "masculino") {
        switch (nivelAtividade) {
            case 1:
                get = gebHomem * gaf[0].sedentario;
                break;
            case 2:
                get = gebHomem * gaf[0].poucoAtivo;
                break;
            case 3:
                get = gebHomem * gaf[0].moderado;
                break;
            case 4:
                get = gebHomem * gaf[0].intenso;
                break;
            case 5:
                get = gebHomem * gaf[0].muitoIntenso;
                break;
        }
    } else {
        switch (nivelAtividade) {
            case 1:
                get = gebMulher * gaf[0].sedentario;
                break;
            case 2:
                get = gebMulher * gaf[0].poucoAtivo;
                break;
            case 3:
                get = gebMulher * gaf[0].moderado;
                break;
            case 4:
                get = gebMulher * gaf[0].intenso;
                break;
            case 5:
                get = gebMulher * gaf[0].muitoIntenso;
                break;

        }
    }


    // ENVIAR INFORMAÇÕES PARA A ARRAY

    usuario[0].nome = nome;
    usuario[0].idade = idade;
    usuario[0].peso = peso;
    usuario[0].altura = altura;
    usuario[0].sexo = sexo;
    usuario[0].emagrecimento = emagrecimento;
    usuario[0].imc = imc;
    usuario[0].gebHomem = gebHomem;
    usuario[0].gebMulher = gebMulher;
    usuario[0].caloriaTotal = caloriaTotal;
    usuario[0].pesoIdeal = pesoIdeal
    usuario[0].get = get
    usuario[0].nivelAtividade = nivelAtividade

    // MOSTRAR RESPOSTAS

    if (sexo == "masculino") {
        document.getElementById('resposta').innerHTML =
            `
                <p>Olá, ${nome}!</p> <p>O seu IMC é: ${imc.toFixed(2)} </p>
                <p>O seu Peso ideal é: ${pesoIdeal.toFixed(2)} kg</p>
                <p>O seu GEB é: ${gebHomem.toFixed(0)}</p>
                <p>você terá que gastar ${caloriaTotal} calorias para perder os ${emagrecimento} kg</p>
                <p>Seu gasto calórico diário é igual a ${get} calorias<p>
            `

    } else if (sexo == "feminino") {
        document.getElementById('resposta').innerHTML = 
        `
            <p> O seu IMC é: ${imc.toFixed(2)} </p>
            <p>O seu GEB é: ${gebMulher.toFixed(0)} </p>
        `
    }
}