function folhaPagamento() {

    let salarioBruto = 0;
    let nome;

    let descontoINSS = 0;
    let salarioLiquido = 0;

    nome = prompt("Insira seu nome: ");

    salarioBruto = parseFloat(
        prompt("Insira seu salário bruto")
    );

    descontoINSS = salarioBruto * 0.08;

    salarioLiquido = salarioBruto - descontoINSS;

    alert(
        "Folha de pagamento\n" +
        "Funcionário: " + nome +
        "\nSalário bruto: R$ " + salarioBruto +
        "\nDesconto do INSS: R$ " + descontoINSS +
        "\nSalário líquido: R$ " + salarioLiquido
    );
}