// Generare 5 numeri casuali (1-100)
const computerNums = [];
for (let i = 1; i <= 5; i++) {
    const computerNum = Math.floor(Math.random() * 100) + 1;
    computerNums.push(computerNum);
}
console.log("Stringa dei numeri generati dal computer", computerNums);
// .visualizzare i numeri in pagina
let computerNumsContainer = document.createElement('div');
document.querySelector('body').append(computerNumsContainer);
computerNumsContainer.innerHTML = `Memorizza questi numeri, hai 30 secondi: ${computerNums}`
;
console.log(computerNumsContainer);

// Parte timer di 30 sec
// .al termine scompaiono i 5 numeri del computer
// .mi serve il div con i numeri del computer

setTimeout(function() {
    document.querySelector('div').style.display = "none";
}, 3000);

// Chiedere di inserire i numeri attraverso prompt (x5)
const userNums = [];
setTimeout(function() {
    checkedNums = [];
    for (let i = 1; i <= 5; i++) {
        let userNum = parseInt(prompt("inserisci uno dei numeri da memorizzare"));
        userNums.push(userNum);
        // Confronto tra numeri inseriti del computer e i numeri inseriti dall'utente
        // .mi serve la stringa dei numeri generati dal computer
        // .imposto ciclo per verificare uno ad uno se 5 i numeri inseriti dall'utente sono presenti nella stringa 
        // - mi serve un array vuota dove inserire ad ogni ciclo il numero (se azzecatto)
        const numToCheck = userNum;
        console.log(numToCheck);
        if ( computerNums.includes(numToCheck) ) {
            checkedNums.push(numToCheck);
        }
        
    }
    console.log("Numeri inseriti dall'utente:", userNums);
    console.log("Numeri che l'utente si è ricordato:", checkedNums);
    // Al termine del ciclo stampo quanti e quali numeri sono stati individuati
        // .mi serve la lunghezza della stringa dei numeri azzeccatti
        // .mi serve il this di ogni [i] elemento della stringa dei numeri azzeccati
    const gameResult = document.createElement('span');
    document.querySelector('body').append(gameResult);
    gameResult.innerHTML = `Ti sei ricordato di ${checkedNums.length} numeri: ${checkedNums}`

}, 3500);



