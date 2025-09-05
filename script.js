const evento = document.getElementById("bottone");
const prezzoOut = document.getElementById("prezzoBiglietto");
const scontoOut = document.getElementById("scontoApplicato");

evento.addEventListener("click", function(e){

    const kmUtente = document.getElementById("chilometri");
    const anniUtente = document.getElementById("anni");
    
    e.preventDefault();
    
    // Calcola prezzo generico

    let prezzo = kmUtente.value * 0.21;

    // Controlla età per eventuale sconto  
    
    let sconto;
    if (anniUtente.value < 18){
        prezzo = prezzo - (prezzo * 0.2);
        sconto = "20%";
    }
    else if (anniUtente.value > 65){
        prezzo = prezzo - (prezzo * 0.4);
        sconto = "40%";
    }
    else{
        sconto = "0%";
    }

    //Arrotonda il prezzo a due cifre decimali

    prezzo = +prezzo.toFixed(2);

    console.log(kmUtente.value, prezzo);
    console.log("ciao");

    //Restituisci l'output del prezzo e dello sconto

    scontoOut.textContent = "Ti è stato applicato uno sconto del: " +sconto;
    prezzoOut.textContent = "Il prezzo del tuo biglietto è di " +prezzo+ "€";
});