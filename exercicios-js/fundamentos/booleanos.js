let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)
console.log(!!true)
console.log(!true)
console.log(!!false)
console.log(!false)

console.log ('os verdadeiros..')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![]) // array
console.log(!!{}) // objeto literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = 33))
console.log(!!(isAtivo = 0))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
// || = ou
console.log(!!('' || null || 0 || 'epa'|| 123)) // retorna se é verdadeiro ou falos
console.log(('' || null || 0 || 'epa'|| 123)) // retorna valor verdadeiro

let nome = 'Lucas'

console.log(nome || 'Desconhecido')