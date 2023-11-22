# JS Carousel autoplay

**MILESTONE 1**

1. dichiaro un array con tutte le immagini scaricate
2. dichiaro una variabile prev, dove registro in memoria la classe ".prev" esistente nel documento HTML
3. dichiaro una variabile next, dove registro in memoria la classe ".next" esistente nel documento HTML
4. dichiaro una variabile "items", che prende nel documento la classe ".items"
5. dichiaro una variabile "currentImage", che corrisponde all'immagine visualizzata corrente
6. con il ciclo _for_, partendo da 0 e per tutta la lunghezza dell'array, dichiaro un div con classe "item".
   - se l'immagine visualizzata è quella corrente, assegno la classe "active".
7. dichiaro una variabile "img", che crea nell'HTML un'immagine, con source le immagini in archivio
8. ad ogni div contenitore con classe "item" assegno un'immagine e ad ogni div padre "items" assegno il figlio "item"

**MILESTONE 2**

1. dichiaro una variabile "itemsAll", che registra in memoria tutte le classi ".item" nel documento HTML
2. con la funzione "addEventListener", al click:
   - Per quanto riguarda _prev_: se l'immagine corrente è maggiore di 0 (per non andare a -1), allora rimuovi la classe active che serve a visualizzare l'immagine nel CSS, torna all'immagine precedente e assegna al div ".item" la classe active.
   - per quanto riguarda _next_: se l'immagine corrente è minore della lunghezza dell'array (con -1 perché l'array parte da 0), allora rimuovi la classe "active", passa alla prossima immagine e assegna la classe "active" al div ".item" successivo.

**BONUS**

1. sono state aggiunte in un file CSS i container dei thumbnails e relativa opacità della classe "active"
2. in JavaScript:
   - se la thumbnail è quella attiva, metti l'opacità a 1
   - altrimenti, metti l'opacità a 0.6
3. Per il carousel:
   - se la thumbnail è quella attiva, modifica la classe active corrente del carousel
