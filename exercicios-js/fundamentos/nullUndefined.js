let valor // não inicializada
console.log(valor)
// console.log(valor2) // valor2 is not defined

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Cannot read property 'toString' of null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuitr undefined é melhor colocar 0
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)