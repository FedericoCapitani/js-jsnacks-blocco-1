/* SNACK 6 
Stampa il cubo dei primi N numeri dove N è il numero idicato dall'utente */

// prendere numero dall'utente
const numero_utente = Number(prompt('Inserisci per quanti numeri vuoi vuoi calcore il cubo'));

const numeri = [];
let elemento_array = 1;

// calcolare i cubi 
for(let i = 1; i <= numero_utente; i++){
    // assegno numero di cui bisogna calcorne il cubo 
    numeri[i] = elemento_array;
    // passo al numero successivo per la prossima iterazioen del ciclo
    elemento_array += 1;
    // calcolo il cubo del numero
    numeri[i] = Math.pow(numeri[i], 3)
    console.log(numeri[i])
}