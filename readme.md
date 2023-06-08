# Campo Minato #

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

--

Il computer deve generare 16 numeri casuali nello stesso range della difficltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati abbiamo calpestato una bomba. La cella si colora di rosso e la partita termina. Altrimenti, la cella cliccata si colora di azzurro e l'utente può continuare  a cliccare sulle altre celle.
LA partita termina quando il giocatore clicca su una bomba o quando raggiunger il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita, il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

- Creo il markup statico.
- Creo il css.
- Rimuovo il markup statico per poterlo generare tramite js.
    - Recupero gli elementi del DOM.
    - Creo una function che mi generi la cella.
    - Creo un EventListener da collegare al button. 
         - Creo un ciclo for dentro l'EventListener che inserisca la cella generata precedentemente dalla function nel DOM. 
        - Tramite un innerText inseriamo all'interno della cella il numero corrispondente ovvero l'index number + 1.
        - Creo un eventlistener alla cella che la colori di azzurro al click.
        - Creo una costante che sia uguale all'index number associato alla cella per poterla stampare in console.

- Creo una variabile '*SCORE*' che tenga il conteggio delle celle cliccate.
    - **SE** la cella non ha la classe '*clicked*' allora aumenta il contatore '*SCORE*'.
- Creo una function che mi generi 16 numeri random.
    - Dichiaro una array vuota. 
    - continuo a generare numeri **fintanto che** la lunghezza dell'array è minore di 16 (considerando lo 0) e utilizzo un **DO WHILE** per far si che non vengano inseriti numeri uguali all'interno dell'array, successivamente li inserisco nell'array dichiarata precedentemente.