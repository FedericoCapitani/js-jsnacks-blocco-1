/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

// array invitati
const invitati = ["roberto", "giovanni", "maria", "luca", "sara"]
const utente = prompt('Inserisci il tuo nome')

let boolean = false;

for (let i = 0; i < invitati.length; i++){
    let controllo = invitati[i];
    if (utente == controllo){
        boolean = true;
    }
}

if(boolean){
    console.log(`Prego ${utente}, la festa inizierà a breve`);
} else {
    console.log('Spiacenti, il suo nome non risulta nella lista degli invitati');
}