// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// inserimento numeri
const primo_numero = parseInt(prompt('Inserisci il primo numero'))
const secondo_numero = parseInt(prompt('Inserisci il secondo numero'))

// controllo numero maggiore
if (primo_numero > secondo_numero) {
    console.log(primo_numero)
} else if (secondo_numero > primo_numero) {
    console.log(secondo_numero);
} else {
    console.log('i numeri sono uguali')
}