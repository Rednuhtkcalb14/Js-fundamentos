/*
    O js possui três diferentes tipos de variáveis:
    - Var: A mais antiga usado apenas em programas antigos, que não foram
    atualizados devido a sua propenção a bugs não é mais utilizada, tem escopo
    global e pode ter seus valores alterados
    - Let: Mais recente que a var e mais confiável devido a atualizações no ES
    tem escopo de bloco, pode ter seus valores alterados
    - Const: não pode ter seus valores alterados e não pode ser redeclarada,
    possuí escopo de bloco assim como a let.
*/ 

let teste = 5

{
    let teste = 40
    console.log(teste)
}

teste = 50

console.log(teste)

const teste2 = 30

// teste2 = 60 gera um erro