// SNACK 9
// calcola la somma e la media dei primi dieci numeri
const numeri = []
let sum = 0;
let media = 0;

for(let i = 0; i < 10; i++){
    // somma numeri da 1 a 10
    sum += i+1;
    // media numeri da 1 a 10
    media = sum / 10;
}
console.log(`la somma dei primi 10 numeri è: ${sum}`);
console.log(`la media dei primi 10 numeri è: ${media}`);