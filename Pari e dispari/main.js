// Pari e Dispari
// L’utente sceglie pari o dispari 
let sceltaUtente = prompt ("scegli pari o dispari");

// inserisce un numero da 1 a 5
let numeroUtente =parseInt(prompt ("scegli un numero tra 1 e 5"));
console.log("il numer scelto dall'utente è:" , numeroUtente);

// numero random computer
let numeroComputer = Math.floor(Math.random() * 5) + 1;
console.log("il numero scelto dal computer è :" , numeroComputer);

sommaNumeri = numeroUtente + numeroComputer;

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function pariDispari( sceltaUtente , numeroUtente , ) {

console.log(" la somma è:" ,sommaNumeri);

if (sommaNumeri % 2 === 0){

    console.log("Il risultato è pari" , sommaNumeri);
} else {
    console.log("Il risultato è dispari" , sommaNumeri);
}

if (sceltaUtente === sommaNumeri) {
    console.log("BRAVO HAI VINTO!");
} else {
    console.log("HAI PERSO");
}

return sceltaUtente , sommaNumeri , numeroUtente

}

console.log("l'utente ha dichiarato :" , sceltaUtente , "ed il numero uscito dalla somma è" , sommaNumeri);

// Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.