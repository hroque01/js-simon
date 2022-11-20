/*
    1. visualizzare in pagina 5 numeri casuali
    2. parte un timer di 30 secondi
    3. appiono 5 prompt che chiedono all'utente i numeri che sono apparsi
    4. dopo averli inseriti il computer mostra quanti e quali numeri sono stati indovinati
*/

// per visualizzare in pagina 5 numeri casuali faccio un array con dentro dei numeri con un algoritmo math.floor(math.random()) con un range di 100 numeri

//creo l'array vuoto
let numArray = [];

//creo un ciclo per far stampare 5 numeri randomici
while (numArray.length < 5) {
    let randomNumbers = Math.floor(Math.random() * 100) + 1;
    if (!numArray.includes(randomNumbers)) {
        numArray.push(randomNumbers);
    }
}

console.log(numArray)

//ora stampiamo i 5 numeri

    //prima dichiaro il contenitore per stampre i numeri
    const cont = document.querySelector(".container");

    //ora prendo il contenitore e ci stampo i numeri
    numArray.forEach( element => cont.innerHTML += `<span class="box">${element}</span>`)

