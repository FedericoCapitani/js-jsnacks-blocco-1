// chiedere all'utente 10 numeri e sommarli
let bool = true;
let counter = 0;
let sum = 0;

while (bool){
    let numero_utente = Number(prompt('Inserisci un numero'))
    sum += numero_utente;
    counter++;
    if (counter >= 10){
        bool = false
    }
}
console.log(sum);