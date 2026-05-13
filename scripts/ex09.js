function ordenacaoDupla() {

    let numUm = 6;
    let numDois = 7;
    let troca = 0;

    console.log("Variáveis declaradas");

    console.log("Variável 1 - " + numUm);

    console.log("Variável 2 - " + numDois);

    if (numUm < numDois) {

        troca = numUm;

        numUm = numDois;

        numDois = troca;

    }

    console.log("Após análise das variáveis");

    console.log("Valor maior - " + numUm);

    console.log("Valor menor - " + numDois);

}