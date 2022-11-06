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
const eleTest = document.querySelector('.test');

elePlayButton.addEventListener('click', gameScript)

function gameScript() {
    let arrListNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 8) + 1);
    eleGameContainers.classList.add('show')
    setTimeout(removeShows, 5000);
    function removeShows() {
        console.log('timer funziona')
        eleTest.classList.add('hidden');
    }
    console.log(arrListNumbers);
}




