// Concatenação de strings

const mensagem = "Hello, "
const names = "Daniel"

console.log(mensagem + names)


const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Comparação de strings

const cidade1 = "Belo Horizonte"
const cidade2 = "belo horizonte"

console.log(cidade1.toLowerCase === cidade2.toLowerCase)

// Medição do tamaho de strings
const myName = "Daniel"

console.log(myName.length)

// Template strings

const mensagem1 = `Hello, ${myName}!`;

console.log(mensagem1)
