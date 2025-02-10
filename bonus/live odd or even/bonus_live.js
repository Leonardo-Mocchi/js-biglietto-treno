const userPick = prompt("Scegliere pari o dispari e quindi scriverlo (tutto minuscolo!)")
console.log(userPick);

const oneTo9Number = Number(prompt("inserire un valore numerico intero tra 1 e 9 compresi"))
console.log(oneTo9Number);


const generatedNumber = Math.floor((Math.random() * 9) + 1);
console.log(generatedNumber);

if (userPick != "pari" && userPick != "dispari") {
    alert("Devi dichiarare pari o dispari! Assicurati di aver scritto bene!")
} else if (oneTo9Number < 1 || oneTo9Number > 9) {
    alert("da 1 a 9 ho detto :/")
} else if (oneTo9Number % 2 === 0 && generatedNumber % 2 === 0 && userPick === ("pari")) {
    alert("hai vinto!")
} else if ((oneTo9Number + 1) % 2 === 0 && (generatedNumber + 1) % 2 === 0 && userPick === ("dispari")) {
    alert("hai vinto!")
} else {
    alert("hai perso! WOMP WOMP")
}