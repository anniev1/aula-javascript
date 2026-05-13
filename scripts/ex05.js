function numeroImparPar() {

    let valor = 0;

    valor = parseInt(prompt("Insira um valor inteiro: "));

    if (valor % 2 == 0) {

        alert("O número é par!");

        valor = valor + 1;

        console.log("O valor passou a ser ímpar: " + valor);

    } else {

        alert("O número é ímpar!");

        valor = valor + 1;

        console.log("O valor passou a ser par: " + valor);

    }
}