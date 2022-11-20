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

    //dichiaro il contenitore dei risultati
    const numRes = document.querySelector('.results');

function simonSays () {
    // array dell'utente
    let arrayUser = [];
    
    //nascondo i numeri dell'utente con una classe displaynone
    cont.classList.add("hidden");
    numRes.classList.remove('hidden');

    //faccio inserire all'utente 5 numeri con 1 prompt, questo lo faccio tranmite un ciclo

    setTimeout(() => {
        for ( let i = 0; i < 5; i++ ) {
        
            let userNum = parseInt(prompt("Inserisci il numero"));
    
            // se il numero e' uguale ai numeri generati lo salvo
            if (numArray.includes(userNum)) {
                arrayUser.push(userNum);
            } else {
                
            }
        }
    
        // stampo i numeri ricordati dall'utente
        if (arrayUser == '') {
            numRes.innerHTML = `<h3>Non hai indovinato nessun numero!</h3>`;
        } else {
            arrayUser.forEach(element => numRes.innerHTML += `<span class="box">${element}</span>`);
        }
    }, 0);

}

setTimeout(simonSays, 30000);