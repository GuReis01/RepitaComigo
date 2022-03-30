// 1.  Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero nem negativo e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido.
function exercicio1() {
    var valor01 = parseInt(prompt("Digite um número"))
    var valor2 = parseInt(prompt("Digite outro número"))
    if (valor2 <= 0) {
        alert("O número não pode ser menor ou igual a ZERO, tente novamente");
        exercicio1();
    }
    else {
        resultado = (valor01 / valor2);
        alert("a divisão do primeiro valor lido pelo segundo valor é= " + resultado + ".")
    }

}

function exercicio2() {
    var contagem = 0
    while (contagem <= 30) {
        document.write("Número: " + contagem + '<br>');
        contagem++;
    }
    document.write("EXPLOSÃO");

    document.write("<br>" + "<br>" + "refresh na pagina para voltar ao início")
}

function exercicio3() {
    var contagem = 1
    while (contagem <= 10) {
        alert("Numero: " + contagem);
        contagem++;
    }
}

function exercicio4() {

    var contagem = 15;
    var soma = 0;


    while (contagem <= 100) {



        soma = soma + contagem;
        contagem = contagem + 1;

    }
    alert("A media dos numeros entre 15 e 100 e= " + (soma / 85))
}

function exercicio5() {
    var continua = true;
    var contador = 0;
    var acumulador = 0;

    while (continua) {
        var numeros = parseInt(prompt("Digite um numero"));
        var op = prompt("Deseja continuar ? Digite S ou N").toUpperCase();
        acumulador += numeros;

        if (op == "N") {
            continua = false;
        } else {
            contador++;
        }
    }

    var media = acumulador / contador;

    alert("O total de numeros foi: " + contador);
    alert("A media foi: " + media);
}

function exercicio6() {
    var continua = true;
    var acumulador = 0;

    while (continua) {

        for (let i = 0; i < 2; i++) {
            var nota = parseInt(prompt("Digite um numero:"));
            acumulador += nota;
        }
        var media = acumulador / 2;
        alert("A sua média é: " + media);

        var op = prompt("Deseja continuar S/N ?").toUpperCase();
        if (op == "N") {
            continua = false;
        }
    }
}

function exercicio7() {
    var array = [];

    for (let i = 0; i < 2; i++) {
        array.push(prompt("Digite um numero:"));
    }
    if (array[0] == array[1]) {
        alert("Numeros são iguais");
    } else if (array[0] > array[1]) {
        alert("Primeiro é maior");
    } else if (array[0] < array[1]) {
        alert("O segundo é maior");
    }
}

function exercicio8() {
    var nota1 = parseInt(prompt("Digite uma nota:"));
    var nota2 = parseInt(prompt("Digite uma nota:"));

    if (nota1 > 10 || nota1 < 0) {
        nota1 = parseInt(prompt("Nota 1 invalida, digite um valor entre 0 e 10"));
    }
    if (nota2 > 10 || nota2 < 0) {
        nota2 = parseInt(prompt("Nota 2 invalida, digite um valor entre 0 e 10"));
    }

    var media = (nota1 + nota2) / 2;
    alert("A media foi: " + media);
}

function exercicio9() {
    var numMax = prompt("Digite ate quanto você deseja contar: ");

    for (let i = 1; i <= numMax; i++) {
        alert(i);
    }

}

function exercicio10() {
    for (let i = 1; i <= 10; i++) {
        var tabuada = 8 * i;
        alert("8 x " + i + " = " + tabuada);
    }
}
function exercicio11() {
    for (let i = 101; i <= 110; i++) {
        alert(i);

    }
}

function exercicio12() {
    var tabuada = prompt("Selecione a casa da tabuada:");

    for (let i = 0; i <= 10; i++) {
        var multi = tabuada * i;

        alert(tabuada + " x " + i + " = " + multi);
    }
}

function exercicio13() {
    var tam = prompt("Ate quanto voce deseja a tabuada");
    var tabuada = prompt("Digite a casa da tabuada:");

    for (let i = 0; i <= tam; i++) {
        var mult = tabuada * i;

        alert(tabuada + " x " + i + " = " + mult);
    }
}

function exercicio14() {
    var arrayInterval = [];
    var arrayFora = [];
    var contadorInterval = 0;
    var contadorFora = 0;

    for (let i = 1; i <= 10; i++) {
        var num = prompt("Digite um valor:");

        if (num >= 24 && num <= 42) {
            arrayInterval.push(num);
            contadorInterval++;
        } else {
            arrayFora.push(num);
            contadorFora++;
        }
    }

    alert("Temos " + contadorInterval + " números dentro do intervalo (24 a 42), e os numeros são: " + arrayInterval);
    alert("Temos " + contadorFora + " números fora do intervalo, e os numeros são: " + arrayFora);

}