let numero = 1 // let tem um scop menor
{
    let numero = 2
    console.log('dentro =', numero) // em primeiro procura no scopo menor se não encontrar sai e vê fora
}
console.log('fora =', numero)

/** Var tem scopo global e de função 
 *  Let tem scopo global, função e bloco
 */