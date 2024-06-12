// Palidroma

// Chiedere all’utente di inserire una parola

let parola = prompt("inserisci una parola");
console.log(parola);

// Creare una funzione per capire se la parola inserita è palindromaPari e Dispari

// function parolaPalindroma(parola) {

//     let parolaDivisa = parola.split(''); 
//     // console.log(parolaDivisa);

//     parolaDivisa = parolaDivisa.reverse();
//     // console.log(parolaDivisa);

//     const parolaInvertita = parolaDivisa.join('');
//     // console.log(parolaInvertita);


//     if(parola === parolaInvertita){
//     console.log('la parola è palindroma');
//     } else {
//     console.log('la parola non è palindroma');
//     }

//     return parola;
// }

const esitoParola = parolaPalindroma(parola);

console.log(esitoParola);



