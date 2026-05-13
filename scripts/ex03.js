function ordenacaoValoresInteiros() {

    let numeros = [];

    let base;

    for (let i = 0; i < 4; i++) {

        numeros[i] = parseInt(prompt("Informe um valor para ordenação: "));

    }

    for (let i = 0; i < 4; i++) {

        for (let j = 0; j < 3; j++) {

            if (numeros[j] < numeros[j + 1]) {

                base = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = base;

            }
        }
    }

    alert(
        "A ordem decrescente é: " +
        numeros[0] + " " +
        numeros[1] + " " +
        numeros[2] + " " +
        numeros[3]
    );
}