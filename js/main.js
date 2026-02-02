//Inserisci i dati tramite il prompt
const age = Number(prompt('Type age'));
const km = Number(prompt('Type km'));

//Calcolo prezzo del biglietto in base ai km da percorrere
let price = km * 0.21;

//Eseguo i controlli condizionali per applicare l'eventuale sconto
if (age < 18) {
  let discount_minor = (price * 20) / 100;
  price -= discount_minor;
} else if (age > 65) {
  let discount_senior = (price * 40) / 100;
  price -= discount_senior;
}