/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contaVocali(str) {
      const vocali = 'aeiou'
      let count = 0
      for (let char of str)
            if (vocali.includes(char)) {
                  count++;
            }
}
return count; // restituisco il risultato!


// Invoca la funzione qui e stampa il risultato in console

console.log(contaVocali(word))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)