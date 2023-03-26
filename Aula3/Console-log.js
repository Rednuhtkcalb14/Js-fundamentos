// Console é uma ferramenta do js usada para comunicação com o usuário,
// entre outras abordagens

// console.log():
// log: registra algo para ser passado no console
console.log("Este é um registro")

// console.time() - console.timeEnd():
// são usados para determinar quando a operação começou e quando acabou
// console.time()
console.time()
for(i = 0; i > 100000;  i++) {
    let teste = i;
}
console.timeEnd()

// console.error():
// error: levanta um erro para ser mostrado no console
console.error(new Error("Este é um erro!"))
