/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
function saluta(nome) {
      return `Ciao ${nome}`;
}

// Dichiara la funzione qui.
const arrowSaluta = word => 'Ciao ' + word;


// Invoca la funzione qui e stampa il risultato in console
console.log(arrowSaluta(userName))


//Risultato atteso se si passa 'Mario': // ciao Mario
