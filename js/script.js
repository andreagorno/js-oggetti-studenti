// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

var studente = {
    nome: "andrea",
    cognome: "gorno",
    eta: 22
};

for (var key in  studente) {
    console.log(studente[key]);
}

var classe34 = [
    {
        nome: "andrea",
        cognome: "gorno",
        eta: 22,
    },
    {
        nome: "gianluca",
        cognome: "pesce",
        eta: 30,
    },
    {
        nome: "andrea",
        cognome: "castenetto",
        eta: 25,
    },
    {
        nome: "adriano",
        cognome: "grimaldi",
        eta: 29,
    },
    {
        nome: "chiara",
        cognome: "carino",
        eta: 22,
    },
    {
        nome: "loredana",
        cognome: "foiadelli",
        eta: 52,
    },
];

console.log(classe34);

for (var i = 0; i < classe34.length; i++) {
    console.log(i+1 + " " + classe34[i].nome + " " + classe34[i].cognome);
}

var nuovoStudente = {
    nome: prompt("Inserisci nome nuovo studente"),
    cognome: prompt("Inserisci cognome nuovo studente"),
    eta: parseInt(prompt("Inserisci età nuovo studente")),
};

classe34.push(nuovoStudente);

console.log(classe34);

for (var i = 0; i < classe34.length; i++) {
    console.log(i+1 + " " + classe34[i].nome + " " + classe34[i].cognome);
}
