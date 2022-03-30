/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

// richiesta numeri all'utente

let numeri = [];
let somma = 0;

for (let i = 0; i < 10; i++){
    numeri[i] = Number(prompt('Inserisci un numero'))
    console.log(numeri[i])
    somma = somma + numeri[i]
}

console.log(`La somma dei numeri è ${somma}`);