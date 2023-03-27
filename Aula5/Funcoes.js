// functions são pedaços de código que podem sr executados em diferentes momentos,
// são uteis, também, para reaproveitamento de código sem necessidade de repetição

function falaOi(texto) {
    console.log(`Oi, ${texto}`)
}

falaOi("Daniel")

function retornaNome(nome) {
    return nome.toUpperCase()
}

falaOi(retornaNome("daniel"))


//Parametros
// são usados para que a função receba os dados necessários para seu funcionamento
function para(parametro1, parametro2) {
    return "Ex."
}

// Tipos de função:

// -> Sem retorno e parâmetro:

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()

// -> Sem retorno e com parâmetro:

function cumprimentarPessoa(pessoa) {
    console.log(`Oi, ${pessoa}`)
}