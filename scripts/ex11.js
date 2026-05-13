function folhaPagamentoVariavel() {

    let salarioBruto = 0;
    let nome;

    let descontoINSS = 0;
    let salarioLiquido = 0;
    let percentualDesconto = 0;

    nome = prompt("Insira seu nome: ");

    salarioBruto = parseFloat(
        prompt("Insira seu salário bruto")
    );

    if (salarioBruto <= 1000.00) {

        percentualDesconto = 8;

        descontoINSS = salarioBruto * 0.08;

        salarioLiquido = salarioBruto - descontoINSS;

    } else if (
        salarioBruto > 1000.00 &&
        salarioBruto <= 1500.00
    ) {

        percentualDesconto = 8.5;

        descontoINSS = salarioBruto * 0.085;

        salarioLiquido = salarioBruto - descontoINSS;

    } else if (salarioBruto > 1500.00) {

        percentualDesconto = 9;

        descontoINSS = salarioBruto * 0.09;

        salarioLiquido = salarioBruto - descontoINSS;

    }

    alert(
        "Folha de pagamento\n" +
        "Funcionário: " + nome +
        "\nSalário bruto: R$ " + salarioBruto +
        "\nDesconto do INSS: R$ " + descontoINSS +
        "\nPercentual de desconto: " + percentualDesconto + "%" +
        "\nSalário líquido: R$ " + salarioLiquido
    );
}