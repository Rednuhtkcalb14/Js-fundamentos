function getForHour(salario, horas) {
    let money = salario / horas

    let total = money.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
    return total
}

const myHour = getForHour(2500, 160)

console.log("Recebido por hora trabalhada: " + myHour)

const numberList = [12, "23", 1, "2", 6, "7", 123, 43, 54]

console.log("\nOrdered list:")
console.log("No ordered: " + numberList)
console.log("Sort ordered:" + numberList.sort())
console.log("Sort + function: " + numberList.sort((a, b) => a-b))

