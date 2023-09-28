/**
 * Diamo per scontata la conoscenza di oggetti e classi e di
 * - EREDITARIETA
 * - POLIMORFISMO
 * - INCAPSULATION
 * - ABSTRACTION
 * ad esempio in java .
 *
 * in js non abbiamo il classico concetto di ereditarietà fatto così:
 * CLASSE (eredita da) ALTRA CLASSE (tramite la keyword extend per esempio )
 * ma abbiamo qualcosa chiamato ereditarieta di prototipo, che funziona cosi:
 * PROTOTIPO <----- ISTANZA
 *
 * significa che tutti gli oggetti che sono agganciati a quel prototipo possono usare metodi
 * e proprieta definite nel prototipo. ( detto cosi non sembra ci sia alcuna differenza con il calssico OOP )
 *
 * per dirlo in maniera diversa diversa nell'oop tradizionale le classi ereditano da altre classi
 * in js le istanze degli oggetti ereditano dal prototypo (che puo essere accostato ad una classe).
 * questo significa che gli oggetti delegano il loro comportamento al prototypo (ovvero i metodi sono nel prototipo)
 * mentre nel classico oop ogni volta che istanziamo un oggetto i metodi vengono effettivamente
 * copiati nell'oggetto creato !
 *
 * ad esempio ogni volta che abbiamo usato un metodo di un array in java (come map)
 * siamo stati in grado di farlo grazie al'ereditarità di prototipo !
 *
 * tant'è che se andiamo avedere la documentazione ufficiale il metodo è chiamato
 * Array.protoype.map(). Quindi Array.prototype è il prototipo di tutti gli array che
 * istanziamo in js.
 * Inoltre se andiamo a stampare in console un array, tra i campi che vediamo
 * c'è n'è uno chiamato prororype che contiene tutte le proprieta e anche i metodi !
 */

const num = [1, 2, 3, 4];
console.log(num);

/**
 * possiamo quindi dire che il nostro array DELEGA l'esecuzione dei metodi al prototipo
 * ( i metodi non vengono effettivamente copiati per ogni oggetto come avviene negli altri
 * linguaggi)
 */

/**
 * Nella pratica come facciamo ad implementare l'oop in js ?
 * ci sono 3 modi differenti !
 *
 * - la funzione Constructor()
 *    è un modo per creare oggetti da una funzione ( ed come gli Array in js sono implementati)
 *    questo metodo crea anche un prototipo !
 *    inoltre questo è il modo che è stato pensato per implementare l'OOP in js fin dalla nascita di js
 *
 * - classi ES6
 *    ES6 ha introdotto le classi in js. Tuttavia è bene tenere presente che queste classi sono
 *    soltanto uno zuccherino sintattico ma fanno la stessa identica cosa di Constructor().
 *    e non sono da intendere come le classiche classi.
 *    Le classi ES6 sono solo un'astrazione della Constructor function e quindi usano la
 *    prototype inheritanche !
 *
 * - Object.create()
 *    è il modo piu facile e immediato di linkare un oggetto ad un prororipo, ma non è molto usato
 */

/**
 * prima di andare avanti rispondiamo ad alcuni possibili dubbi !
 *
 * perche abbiamo fatto tutti questi discorsi sull'OOP se
 * fino ad ora abbiamo usato gli oggetti  e li creavamo direttamente cosi:
 *
 * const object = {...}
 *
 * questi sono chiamati Object literal e hanno delle differenze fondamentali rispetto
 * agli oggetti creati con i metodi descritti prima !
 *
 * - Object Literal: Utilizza la sintassi delle parentesi graffe {} per definire gli oggetti direttamente,
 *   specificando le proprietà e i valori all'interno delle parentesi graffe. Ad esempio: { nome: "Alice", età: 30 }.
 *
 * - OOP: Utilizza le metodologie definite precedentemente per per essere creato e viene rappresentato il modello dell'oggetto
 *   e quindi crea istanze di quell'oggetto utilizzando il costruttore della classe.
 *
 * - Object Literal: Non ha un costruttore formale. Gli oggetti letterali sono istanze dirette e non richiedono una funzione costruttrice.
 *
 * - OOP: Definiscono un costruttore tramite il metodo constructor all'interno della classe. Il costruttore viene chiamato quando si crea
 *   una nuova istanza della classe.
 *
 * - object Literal: Puoi aggiungere metodi direttamente agli oggetti letterali utilizzando la sintassi di funzione all'interno delle proprietà.
 *
 * - OOP: Definiscono i metodi come funzioni all'interno del corpo della classe e i metodi sono condivisi tra tutte le istanze create dalla classe.
 *
 * - Object Literal: Non supporta direttamente l'ereditarietà tra oggetti letterali. Per condividere proprietà o metodi tra oggetti letterali,
 *   dovresti copiare manualmente i valori da un oggetto all'altro.
 *
 * - OOP: Supportano l'ereditarietà attraverso la definizione di classi figlie che ereditano dalle classi genitore.
 *   Questo consente di creare una gerarchia di classi e di condividere metodi e proprietà tra di esse.
 *
 * In generale, la scelta tra oggetti letterali e classi dipende dalle esigenze specifiche del tuo codice.
 * Gli oggetti letterali sono più adatti per creare oggetti semplici e isolati,
 * mentre le classi sono più adatte per creare modelli di oggetti complessi e gerarchie di oggetti.
 * Entrambi gli approcci sono ampiamente utilizzati in JavaScript e possono essere combinati per scrivere codice più efficiente ed elegante.
 */
