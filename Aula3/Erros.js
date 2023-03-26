/*
-> SyntaxError: ocorrem geralmente pela falta de algum digito em algum código
- Ex:

if (x == 5 {
  console.log("x is equal to 5");
}

-> TypeError: ocorrem geralmente quando tenta-se usar um método de um tipo de dado em outro
- Ex:

var x = "hello";
x();

-> ReferenceError: ocorre geralmente quando tenta-se usar algo não definido
- Ex:

console.log(x);

-> RangeError: ocorre geralmente quando um numero está fora de um range determinado
- Ex:

function foo(n) {
  if (n < 0 || n > 10) {
    throw new RangeError("n must be between 0 and 10");
  }
  // ...
}

foo(15);

-> InternalError: Erros que ocorrem por trás do código escrito
- Ex:

function foo() {
  foo();
}

foo();
*/