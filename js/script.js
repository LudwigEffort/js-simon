/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
Attenzione che usando Google Chrome, il prompt può dare problemi con la visualizzazione dei numeri in pagina sui tempi di refresh del dom, lasciando i numeri visibili mentre il prompt è aperto.
*/



const elePlayButton = document.querySelector('.play-button');
const eleGameContainers = document.querySelector('.game-containers');
const eleNumbersCont = document.querySelector('.numbers-containers');
//const eleTest = document.querySelector('.test');

elePlayButton.addEventListener('click', gameScript)

function gameScript() {
    //reset
    let arrListNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 8) + 1);
    eleGameContainers.classList.add('show')
    //add print arr
    for(i = 0; i < arrListNumbers.length; i++) {
        const eleSpan = document.createElement('span');
        eleSpan.classList.add('arr-numbers');
        eleSpan.innerHTML = arrListNumbers[i];
        eleNumbersCont.append(eleSpan);
    }
    setTimeout(removeShows, 5000);
    function removeShows() {
        //console.log('timer funziona')
        eleNumbersCont.classList.add('hidden');
    }

    let counter = 0;
    let arrNumGuessed = [];

    setTimeout(whichNumbersTime, 10000);
    function whichNumbersTime() {
        for(i = 0; i < arrListNumbers.length; i++){
            let whichNumber = parseInt(prompt("Quale numbero?"));
            if (whichNumber == arrListNumbers[i]) {
                counter++;
                arrNumGuessed.push(whichNumber);
            }
            // else {
            //     counter++;
            //     arrListNumbers.push('x');
            // }
        }
        console.log(counter);
        console.log(arrNumGuessed);
        const eleWin = document.createElement('div');
        eleWin.innerHTML = `You guessed: ${counter}`;
        eleGameContainers.append(eleWin);

        for(i = 0; i < arrNumGuessed.length; i++) {
            const eleGuesed = document.createElement('span');
            eleGuesed.innerHTML = arrNumGuessed[i];
            eleGameContainers.append(eleGuesed);
        }
    }
}







