// Operador usado para fazer comparações de forma simplificada

const idadeMinima = 18
const idadeCliente = 16

if (idadeCliente  < idadeMinima) {
    console.log("Suco")
} else {
    console.log("Cerveja")
}


console.log(idadeCliente < idadeMinima ? "Suco" : "Cerveja")

// O que vem antes do "?" indica a comparação
// O ":" separa o que será exibido para cada caso da comparação,
// o primeiro se for verdadeiro, o segundo se for falso 