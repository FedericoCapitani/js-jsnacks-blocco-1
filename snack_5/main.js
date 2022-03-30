/* SNACK 5
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
 */

// creare array vuoto
const numeri_dispari = []

// chiedo all'utente 6 numeri
for (let i = 0; i < 6; i++){
    let numero_utente = Number(prompt('Inserisci un numero'))
    if (numero_utente % 2 != 0){
        numeri_dispari.push(numero_utente)
    }
}
console.log(numeri_dispari)