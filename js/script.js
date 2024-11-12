// Snack 1

// Creo un arrey di oggetti
const biciList = [
    { nome: `Vento`, peso: 7.8 },
    { nome: `Roccia`, peso: 12.5 },
    { nome: `Aquila`, peso: 8.3 },
    { nome: `Fiamma`, peso: 6.9 },
    { nome: `Scatto`, peso: 9.1 }
]
console.log(biciList);

// Creo una varibile generale che ha come valore il peso della prima bici
let lighterBici = biciList[0].peso
console.log(lighterBici);

// Creo un ciclo for per scorrere nella lista di oggetti
for (let i = 0; i < biciList.length; i++) {
    const currentBici = biciList[i];
    // Creo un istruzione condizionale per trovare l'oggetto più leggero
    if (currentBici.peso < lighterBici) {
        lighterBici = currentBici;
        console.log(lighterBici);
    }
}

// Stampo il risultato in console
console.log(`La bici più leggera è la ${lighterBici.nome} con un peso di ${lighterBici.peso}Kg.`);
