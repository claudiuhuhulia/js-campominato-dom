# Griglia Campo Minato #

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

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