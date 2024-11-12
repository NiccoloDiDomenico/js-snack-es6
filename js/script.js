// Snack 1

// Creo un arrey di oggetti
const biciList = [
    {nome: `Vento`, peso: 7.8},
    {nome: `Roccia`, peso: 12.5},
    {nome: `Aquila`, peso: 8.3},
    {nome: `Fiamma`, peso: 6.9},
    {nome: `Scatto`, peso: 9.1}
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


// Snack 2

// Creo un arrey di oggetti
const team = [
    {nome: `Napoli`, punti: 0, goal: 0},
    {nome: `Inter`, punti: 0, goal: 0},
    {nome: `Atalanta`, punti: 0, goal: 0},
    {nome: `Lazio`, punti: 0, goal: 0},
    {nome: `Juventus`, punti: 0, goal: 0},
    {nome: `Milan`, punti: 0, goal: 0},
    {nome: `Roma`, punti: 0, goal: 0},
]
console.log(team);

// Creo una funzioni di appoggio che genera num. casuali
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)

// Creo tre variabili generali 
const newArray = [];
let randomPoints;
let randomGoals;

// Creo un ciclo for per scorrere nella lista degli oggetti
for (let i = 0; i < team.length; i++) {
    let currentTeam = team[i];
    // console.log(currentTeam);

    // Assegno un numero casuale da 0 a 100 alle variabili di appoggio
    randomPoints = getRandomInt(0, 100)
    randomGoals = getRandomInt(0, 100)
    // console.log(randomPoints, randomGoals);

    // Assegno quel numero casuale alle keys degli oggetti nell'array
    currentTeam.punti = randomPoints
    currentTeam.goal = randomGoals
    console.log(currentTeam);

    // Creo un nuovo array con solo due keys: nome e punti delle squadre
    newArray.push(currentTeam.nome, currentTeam.punti)
    // console.log(newArray);
    
}

// Stampo il risultato in console
console.log(newArray);


// Snack 3 (bonus)

// Creo un array a caso per la funzione
let students = ["Alessio", "Davide", "Lorenza", "Mattia", "Sara"];
console.log(students);

// Creo la funzione che ritornerà un arrey nuovo con i valori che hanno la posizione compresa tra i due numeri:
/**
 * Description
 * @param {string} arrayToCheck
 * @param {number} from
 * @param {number} to
 * @returns {string} // newArray
*/
function positionIncluded(arrayToCheck, from, to) {
    const newArray = [];
    for (let i = from; i <= to; i++) {
        const curElement = arrayToCheck[i];


        newArray.push(curElement); 
    }
    return newArray;
}

// Stampo il risultato in console
positionIncluded(students, 1, 3);
console.log(`Gli studenti selezionati sono:`, positionIncluded(students, 1, 3));


