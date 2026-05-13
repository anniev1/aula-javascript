function verificarVogalConsoante() {

    let letra;

    letra = prompt("Insira uma letra desejada: ").toLowerCase();

    if (
        letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||
        letra == "u"
    ) {

        console.log("A letra escolhida é uma vogal: " + letra);

    } else {

        console.log("A letra escolhida é uma consoante: " + letra);

    }
}