/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

const userAge = Number(prompt("Inserire la propria età", "solo numeri!"))
console.log(userAge);

const userTripLength = Number(prompt("Inserire il numero di kilometri da percorrere", "solo numeri!"))
console.log(userTripLength);

let ticketEstimate = userTripLength * 0.21;
console.log(ticketEstimate);




if (userAge < 18) {
    alert("Il prezzo stimato ammonta a: " + (ticketEstimate * 0.8).toPrecision(4) + "€")
} else if (userAge > 65) {
    alert("Il prezzo stimato ammonta a: " + (ticketEstimate * 0.6).toPrecision(4) + "€")
} else {
    alert("Il prezzo stimato ammonta a: " + ticketEstimate.toPrecision(4) + "€")
}



