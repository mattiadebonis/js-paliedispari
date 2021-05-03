//FUNZIONI

// Genera un numero random da 1 a 5
function numeroRandom(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

//Stabilisci se la somma dei due numeri è pari o dispari
function pariDispari(num){
    return num % 2 == 0;
}

//VARIABILI
var sceltaUtente="";
var numeroUtente=0;
var numeroComputer = numeroRandom(1,5);
var sommaNumeri = 0
risultato = false;

// inserisci p per pari d per dispari
do{
    sceltaUtente = prompt("Scegli pari inserendo la lettera 'p' o scegli dispari inserendo la lettera 'd'")
}while(sceltaUtente != "p" && sceltaUtente != "d")

//inserisci un numero da 1 a 5
do{
    numeroUtente = parseInt(prompt("inserisci un numero da 1 a 5"));
}while(numeroUtente <= 1 && numeroUtente >= 5)

// Somma i due numeri
sommaNumeri = numeroUtente + numeroComputer;

// stabilisci se la somma è pari o dispari
risultato = pariDispari(sommaNumeri);

//Stampa risultati
document.getElementById("numero_computer").innerHTML = "Il numero del computer è " + numeroComputer;

document.getElementById("numero_giocatore").innerHTML = "Il numero che hai scelto è " + numeroUtente;

if (sceltaUtente == "p"){
    document.getElementById("scelta_giocatore").innerHTML = "Hai scelto pari";
}else{
    document.getElementById("scelta_giocatore").innerHTML = "Hai scelto dispari";
}

document.getElementById("somma").innerHTML = "La somma dei due numeri è " + sommaNumeri;

//dichiara il vincitore
if ((sceltaUtente == "p" && risultato ==true) || (sceltaUtente =="d" && risultato == false)){
    document.getElementById("risultato").innerHTML = "Hai vinto"
}else{
    document.getElementById("risultato").innerHTML = "Ha vinto il computer"
}

