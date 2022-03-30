// SNACk 8
/* chiedi un numero di 4 cifre e calcola la somma di tutte le cifre che compongono il numero */

// chiedere il numero all'utente
let numero_utente = Number(prompt('Inserisci un numero di quattro cifre'))
const digits = []
let sum = 0;

if (numero_utente < 1000 || numero_utente > 9999){
    console.log('Hai sbagliato ad inserire il numero');
} else {
    for ( let i = 0; i < 4; i++){
        // prendo la prima cifra e la inserisco nell'array
        digits[i] = numero_utente % 10;
        // prendo il numero dell'utente e tolgo la cifra appena messa nell'array
        numero_utente = Math.floor(numero_utente / 10);
        // calcolo la somma delle cifre
        sum += digits[i]
    }
}
console.log(`La somma è ${sum}`)