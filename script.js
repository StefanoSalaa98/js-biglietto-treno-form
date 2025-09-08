const evento = document.getElementById("bottone");
const cancella = document.getElementById("annulla");
const prezzoOut = document.getElementById("prezzoBiglietto");
const scontoOut = document.getElementById("scontoApplicato");
const utenteOut = document.getElementById("nomePasseggero");
const carrozzaOut = document.getElementById("carrozzaBiglietto");
const codiceOut = document.getElementById("codiceBiglietto");

evento.addEventListener("click", function(e){

    const kmUtente = document.getElementById("chilometri");
    const anniUtente = document.getElementById("anni");
    const nomeUtente = document.getElementById("nome");
    
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

    //Restituisci l'output dei dati inseriti

    utenteOut.innerHTML = "<p>" +nomeUtente.value+ "<\p>";

    const numCarrozza = Math.floor(Math.random()*10 + 1);
    carrozzaOut.innerHTML ="<p>" +numCarrozza+ "<\p>";
    
    const codice = Math.floor(Math.random()*899999 + 100000);
    codiceOut.innerHTML ="<p>" +codice+ "<\p>";

    let tipoBiglietto;
    if(sconto === "0%"){
        tipoBiglietto = "BIGLIETTO STANDARD";
    }
    else if(sconto === "20%"){
        tipoBiglietto = "BIGLIETTO GIOVANI";
    }
    else{
        tipoBiglietto = "BIGLIETTO ANZIANI";
    }
    scontoOut.innerHTML = "<p>" +tipoBiglietto+ "<\p>";
    prezzoOut.innerHTML = "<p>" +prezzo+ "€<\p>";

    //Ripulisci elementi form

    nomeUtente.value="";
    kmUtente.value="";
    anniUtente.value="";
});

//Ripulisci il biglietto

cancella.addEventListener("click",function(){
    prezzoOut.innerHTML="";
    scontoOut.innerHTML="";
    utenteOut.innerHTML="";
    carrozzaOut.innerHTML="";
    codiceOut.innerHTML="";
});