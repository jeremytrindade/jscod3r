const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // se não tiver dado não da erro so não dá é nada
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!") 
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e')) // expressão regular (REGEX) substitui todos digitos por:
console.log(escola.replace(/\w/g, 'e')) // substitui tudo por:


console.log('Ana,Maria,Pedro'.split(/,/))// ou (',') criar ARRAY
