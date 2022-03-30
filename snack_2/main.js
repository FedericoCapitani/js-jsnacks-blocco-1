// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// inserire due parole

const prima_parola = prompt('Inserisci una parola')
const seconda_parola = prompt('inserisci un\'altra parola')

console.log(prima_parola.length);
console.log(seconda_parola.length);

if (prima_parola.length > seconda_parola.length){
    console.log(' la prima parola è più lunga')
} else if (prima_parola.length < seconda_parola.length){
    console.log('la seconda parola è più lunga');
} else {
    console.log('le parole hanno la stessa lunghezza')
}