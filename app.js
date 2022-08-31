'use strict'

import { showArray } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45]


//.map - percorre o array e retorna um array do mesmo tamanho modifcado ou nao
const desconto2 = (number) => number - 2
const numbersDesconto = numbers.map (desconto2)

const menor20 = (valor) => valor < 20
const valorMenor20 = numbers.filter(menor20)

const soma = (a, b) => a+ b
const valorTotal = numbers.reduce(soma, 0)

showArray(numbers, 'Todos os Numeros')
showArray(numbersDesconto, 'menos 2')
showArray(valorMenor20, 'menor que 20')
showArray([valorTotal], 'soma')

//======================================================

const aumentar100 = (number) => number + 100
const aumento = numbers.map (aumentar100)

const par = (valor) => valor % 2 == 0
const pares = numbers.filter(par)

const desconto = (number) => number - 4
const numberDesconto4 = numbers.map (desconto)

const impar = (valor) => valor % 2 != 0
const impares = numbers.filter(impar)
const somando = (a, b) => a + 21
const total = impares.map(somando)

showArray(aumento, 'exercicio 1')
showArray(pares, 'exercicio 2')
showArray(numberDesconto4, 'exercicio 3')
showArray(impares, 'exercicio 4')
showArray(total, 'exercicio 4')


