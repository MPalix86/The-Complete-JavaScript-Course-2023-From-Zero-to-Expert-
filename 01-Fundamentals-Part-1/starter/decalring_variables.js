// può essere cambiato il valore in qualsiasi momento del programma
let js = 'bella';

// non può cambiare il valore durante l'esecuzione, ritorna errore se si prova a farlo
// quindi non è possibile nemmeno fare 
const somevar; // perche sarebbe come assegnare il valore undefined senza poterlo cambiare

// questo è il modo di dichiarare variabili prima del moderno javascript(prima ECMASCRIPT 6)
// può essere totalmente ignorato (e dovrebbe)
var job = 'programmer';


// anche questo tipo di logica è prevista, ma in questo caso js non crea una variabile
// nello scope corrente ma crea una proprietà nel contesto globale (che in questo caso è windows)
name = 'mirco'