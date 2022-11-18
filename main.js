 // to define btn start
 let btnStart = document.getElementById("btn_start");
 
 // to define the element for innerhtml
 let displayNum = document.getElementById("numbers");

 // to define input for array
 let input = document.getElementById("input");

let btnInvia = document.getElementById("invia");

let verification = document.getElementById("verifica");

 // create and array of 16 bomb
 const myArrNumRandom = genArrNumRandomMinMax(1, 1, 100);
 console.log(myArrNumRandom)

btnStart.addEventListener('click', 

    function(){

        displayNum.innerHTML  += myArrNumRandom
        console.log(myArrNumRandom)
       
    }
    
);

let arrayUtente = [];

btnInvia.addEventListener('click', function(){

   
    const utenteNum = parseInt(input.value);
    
    arrayUtente.push(utenteNum)
    console.log(arrayUtente)

})

verification.addEventListener('click', function() {
    if ( arrayUtente !== myArrNumRandom) {
        console.log("hai vinto")
    } else {
        console.log("suca")
    }
})















// FUNCTIONS FOR GENERATE RANDOM NUMBERS
// this function genetare random numbers inside the div.box
function randomInteger(min, max) {
    return ( Math.floor(Math.random()* (max + 1) - min) + min);
}

function genArrNumRandomMinMax (howMany, minNum, maxNum) {

    // callback to the function
    // let newNumber = randomInteger(minNum, maxNum);

    // generate an array of howMany elements
    const arrNum = [];

    while (arrNum.length < howMany) {

        // define again the newNumber because the old one is outside of the while
        let newNumber = randomInteger(minNum, maxNum);

        // if the newNumber is not inside of the arrNum, push it to the array
        if (!arrNum.includes(newNumber)) {
            arrNum.push(newNumber);
        }
    }

    return arrNum;


}