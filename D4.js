/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  const areaRettangolo = l1 * l2;
  return areaRettangolo;
}
let l1 = 24;
console.log(l1);

let l2 = 35;
console.log(l2);

console.log(area(l1, l2));

/* ESERCIZIO 2
Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
la loro somma moltiplicata per tre.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(n1, n2) {
  if (n1 === n2) {
    const sommaX3 = (n1 + n2) * 3;
    return sommaX3;
  } else {
    const somma = n1 + n2;
    return somma;
  }
}
let n1 = 8;
let n2 = 2;
console.log(crazySum(n1, n2));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num1) {
  let risultato;
  if (num1 > 19) {
    let risultato = (num1 - 19) * 3;
    return risultato;
  } else {
    let risultato = num1 - 19;
    return risultato;
  }
}
let num1 = Math.floor(Math.random() * 30);

console.log(crazyDiff(num1, 19));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  if (n >= 20 && n <= 200) {
    return true;
  } else if ((n = 400)) {
    return true;
  } else {
    return false;
  }
}

let n = Math.floor(Math.random() * 1000);

console.log(boundary(n));

/* SCRIVI QUI LA TUA RISPOSTA */
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
