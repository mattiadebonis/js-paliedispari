// 1 - Palindroma

// funzione per capire se la parola inserita è palindroma
function controlloPalindroma(par){
    var lunghezzaParola = par.length;
    var inizioPar="";
    var finePar="";
    var palindromaPar = false;

    //se la lunghezza della parola è pari controlla se è palindroma
    if (lunghezzaParola % 2 == 0){
        //concatena la prima metà della parola
        for(var i=0; i<lunghezzaParola/2; i++){
            inizioPar += par[i];
        }

        //concatena in senso inverso la seconda metà della parola
        for(var i=lunghezzaParola-1; i>=lunghezzaParola/2; i--){
            finePar += par[i];
        }
    }
    //controlla se le due metà della parola sono uguali
    if (inizioPar == finePar){
        palindromaPar = true;
    }

    return palindromaPar;
}
// /funzione per capire se la parola inserita è palindroma

// Chiedere all'utente di inserire una parola
var parola=prompt("Inserisci una parola");
var palindromaParola = controlloPalindroma(parola);

if (palindromaParola == true){
    document.getElementById("palindroma").innerHTML = "La parola è palindroma";
}else{
    document.getElementById("palindroma").innerHTML = "La parola <strong>non </strong> è palindroma";
}

