// Exemplos de Operadores Lógicos em JavaScript

// Operador E lógico (&&)
const a = true;
const b = false;

const resultadoE1 = a && b;
const resultadoE2 = a && true;
const resultadoE3 = b && false;

console.log(`true && false: ${resultadoE1}`);
console.log(`true && true: ${resultadoE2}`);
console.log(`false && false: ${resultadoE3}`);

// Operador OU lógico (||)
const resultadoOU1 = a || b 
const resultadoOU2 = a || false 

console.log(`true || false: ${resultadoOU1}`);
console.log(`true || false: ${resultadoOU2}`);

// Operador NÃO lógico (!)
const resultadoNAO1 = !a
const resultadoNAO2 = !b

console.log(`!true: = ${resultadoNAO1}`);
console.log(`!false: = ${resultadoNAO2}`);

// Combinações de operadores lógicos
const resultadoComb1 = (a || b) && (!b);
const resultadoComb2 = !(a && b) || a;

console.log(`(true || false) && !false: ${resultadoComb1}`);
console.log(`!(true && false) || true: ${resultadoComb2}`);