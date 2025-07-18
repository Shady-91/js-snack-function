/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

function filterByInitial(arr, letter) {
      const filteredNames = [];
      for (let i = 0; i < arr.length; i++) {
            if (arr[i].charAt(0).toLowerCase() === letter.toLowerCase()) {
                  filteredNames.push(arr[i]);
            }
      }
      return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console
const result = filterByInitial(names, "A");
console.log(result);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]