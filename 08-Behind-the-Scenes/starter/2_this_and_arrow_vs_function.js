'use strict';
console.log(this);

/**
 * se proviamo a vedere cosa c'è in this nello scope globale abbiamo che conterà :
 * un oggetto cosi fatto : window {windows : window: ,self : window, document :document, name :'', location : Location}
 */
console.log('global context', this);

/**
 * Quando si utilizza la modalità "strict mode" in JavaScript, l'oggetto this all'interno dello scope della funzione sarà
 * undefined se non è stato esplicitamente impostato o se la funzione viene chiamata senza un oggetto di contesto specifico.
 * Ciò significa che la funzione calcAge riceve un proprio oggetto this che è undefined.
 * Se la modalità "strict mode" non fosse stata utilizzata, l'oggetto this all'interno della funzione calcAge avrebbe
 * rappresentato l'oggetto di contesto nel quale la funzione è stata invocata.
 * Tuttavia, in questo caso specifico, essendo la funzione chiamata senza alcun oggetto di contesto,
 * this sarebbe stato impostato sull'oggetto globale (window nell'ambiente del browser o global nell'ambiente di Node.js)
 * anziché essere undefined. ma poiche abbiamo usato 'use strict' this sara undefined ! Un'altro motivo per usare la strict mode!
 */
const calcAge = function (birthDate) {
  const now = 2023;
  console.log('calcAge', this);
  return now - birthDate;
};
calcAge();

/**
 * Le arrow function in JavaScript non creano il proprio oggetto this, ma invece ereditano il valore di this dal contesto
 * circostante in cui sono state definite. Nel caso specifico dell'esempio fornito, l'arrow function calcAgeArrow()
 * utilizza il valore di this del contesto globale. Quindi, this all'interno della funzione calcAgeArrow rappresenterà l
 * 'oggetto globale (window nell'ambiente del browser o global nell'ambiente di Node.js) anche se si usa use strict !
 */
const calcAgeArrow = birthDate => {
  console.log('calcAgeArrow', this);

  const now = 2023;
  return now - birthDate;
};
calcAgeArrow();

/**
 *  quando definiamo un metodo (metodo = funzione nell'oggetto), this nel metodo sarà sempre l'oggetto che sta chiamando il metodo, attenzione questo
 *  non necessariemnte significa che il metodo deve essere chiamato dall'oggetto in cui è stato definito  !
 *  anzi, il contrario, questa cosa la vedremo piu avanti.
 */
const mirco = {
  year: 1995,
  name: 'mirco',
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  test: this,
};

/**
 * poiche l'oggetto che chiama il metodo è mirco this all'interno di calcAge sara = all'oggetto mirco.
 */
mirco.calcAge();

/**
 * dentro test invece che è una semplice variabile di primo livello all'interno dell'oggetto mirco ci sara il this ereditato dallo scope in cui
 * l'oggetto è immerso. in questo caso lo scope globale e quindi this sara uguale a windows o global.
 */
console.log('mirco test', mirco.test);

/**
 * vediamo questo esempio
 */
const matilda = {
  year: 2017,
};

matilda.calcAge = mirco.calcAge;

// cosa sara this ?
// abbiamo detto che this si riferisce sempre all'oggetto che chiama il metodo e non all'oggeto nel quale il metodo è definito !
// quindi in questo caso this puntera a matilda
matilda.calcAge();

// in questo caso?
const f = mirco.calcAge;
// in questo caso this sara undefined, perche f è diventata una funzione normale (non piu un metodo) e stiamo usando la strict mode (se non stessimo usando la strict mode)
// this sarebbe uguale awindow o global.
//  e inoltre la funzione tornerà errore perche cerchera di chiamare this.year ma this sarà undefined e undefined.year non si puo fare
// f();

// vediamo ora meglio le differenze tra arrow functions e funzioni normali
// le arrow functions invece non ottengono mai un loro this ma ereditano sempre il this del contesto dentro il quale si trovano durante la definizione
// della funzione o del metodo !
const mirco1 = {
  year: 1995,
  name: mirco,

  // poiche per chiamare calcAge devo necessariamente usare mirco1.calcAge() e poiche calcAge è una metodo
  // normale (non arrow) , this, dentro calcAge ritornerà l'oggetto che la sta chiamando, ovvero mirco1
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },

  // ricordiamo che nelle arrow functions this fa sempre parte del contesto nel quale la arrow function è immersa (in questo caso globale)
  // quindi greet anche se sara chiamata tramite un'oggetto ritornara sempre l'oggetto globale. Questa è la grossa differenza tra arrow f e f normali
  greet: () => {
    console.log(`hey ${this.firstname}`);
  },
};
mirco1.calcAge();
mirco1.greet();

/**
 * Le variabili dichiarate con var non hanno uno scope di blocco come le variabili let e const. Al contrario, le variabili var hanno
 * uno scope di funzione o uno scope globale se dichiarate al di fuori di qualsiasi funzione. Quindi, se una variabile viene dichiarata con var all'interno
 * di una funzione, la sua visibilità sarà limitata a quella specifica funzione, ma sarà accessibile da qualsiasi parte della funzione.
 * Allo stesso modo, se viene dichiarata al di fuori di qualsiasi funzione, la variabile avrà uno scope globale e sarà accessibile da qualsiasi parte del
 * codice.
 *
 * ma cosa significa scope di blocco ? un blocco è in generale qualcosa delimitato da partentesi graffe
 */

{
  const a = 'test a';
  console.log('sono un blocco');
  if (true) {
    const b = 'test b';
    console.log('sono unaltro blocco');
    console.log('test' + a); // ho accesso ad a perche comunuqe sono nel blocco di definizione di a
  }
  console.log(b); // errore, è stata dichiarata con let quindi non ci posso accedere da fuori il blocco
  // se fosse stata dichiarata con var ci avrei potuto accedere ( un altro motivo per non utilizzare var)
}

/**
 * esempio pratico:
 */
var firstName = 'gloria'; // firstName poiche è stata dichiarata con var andra dentro window che è l'attuale contesto

const mirco2 = {
  year: 1995,
  firstName: mirco,

  // in questo caso vale tutto quello che abbiamo detto prima
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },

  // in questo caso anche ma con una differenza: infatti abbiamo dichiarato una var (firstname) che è andata a finire all'interno
  // del contesto globale che è window
  // la arrow function in questo caso eredita dentro this  proprio il contesto nel quale è immersa (ovvero window)
  greet: () => {
    console.log(`hey ${this.firstName}`);
  },
};

// chiamando mirco2.greet otterrò ciao gloria wtf ! e questo perche per caso abbiamo chiamato una varibile firstname
// che è andata a finire dentro window poiche dichiarata con var. questo comportamento può portare a bug assurdi e
// molto difficili da trovare ! mai usare var !!!
// un'altro insegnamento che potremmo trarre da questo pezzo di codice è che non bisognerebbe mai usare una
// arrow function come metodo ( metodo = funzione dentro oggetto ) dato che ereditano il this dal contesto nel quale sono state dichiarate
mirco2.greet();

// vediamo cosa succede a this se abbiamo una funzione dentro un metodo
const mirco3 = {
  firstName: 'mirco',
  year: 1995,
  // in questo caso vale tutto quello che abbiamo detto prima
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
    const isMillennial = function () {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    // cosa sara this dentro la funzione calcAge ?
    isMillennial();
  },
};

// se teniamo conto che il this dentro una funzione fa riferimento sempre all'oggetto che chiama la funzione allora
// è facile dire che il this dentro isMillennial sara undefined !
// poiche isMillennial non è chiamata da nessun oggetto !
// mirco3.calcAge(); dara quindi errore perche appunto this all'interno di is millennial non è definito !

// per aggirare il problema appena visto si fa cosi :
const mirco4 = {
  firstName: 'mirco',
  year: 1995,

  calcAge: function () {
    console.log(2023 - this.year);

    // salvando this in self in questo modo riusciamo ad accedere perche diventa una semplice variabile con scope di blocco
    // che quindi posso usare tranquillamente dall'interno della funzione.
    // questa soluzione veniva usata prima di ES6 (è ancora valida), ora si fa diversamente !
    const self = this;
    const isMillennial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };

    isMillennial();
  },
};

mirco4.calcAge();

const mirco5 = {
  firstName: 'mirco',
  year: 1995,

  calcAge: function () {
    console.log(2023 - this.year);

    // la soluzione moderna è usare una arrow function che eredita direttamente il this del contesto dentro il quale sta!
    const isMillennial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  },
};

mirco5.calcAge();

// le funzioni quando vengono chiamate oltre ad ottenere l'oggetto this, ottengono l'oggetto arguments che contiene
// tutti gliargomenti passati alla funzione stessa.
// questo significa che posso anche passare n argomenti nonostante ne abbia dichiarati solo 2, e avere accesso a quegli
// argomenti tramite arguments che ovviamente non avranno nome
function addExpr(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(addExpr(5, 5, 4, 6, 7));

// le arrowfunction non ricevono l'oggetto arguments a differenza delle funzioni normali !
const addArrow = () => {
  console.log(arguments);
  return a + b;
};

console.log(addArrow(5, 5));
