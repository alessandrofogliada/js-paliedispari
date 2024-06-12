// // // // // // // // // // // // // // // // 
    // SCOPRI SE UNA PAROLA è PALINSTROMA //
//// // // // // // // // // // // // // // // 

function parolaPalindroma(parola) {

    let parolaDivisa = parola.split(''); 
    // console.log(parolaDivisa);

    parolaDivisa = parolaDivisa.reverse();
    // console.log(parolaDivisa);

    const parolaInvertita = parolaDivisa.join('');
    // console.log(parolaInvertita);


    if(parola === parolaInvertita){
    console.log('la parola è palindroma');
    } else {
    console.log('la parola non è palindroma');
    }

    return parola;
}