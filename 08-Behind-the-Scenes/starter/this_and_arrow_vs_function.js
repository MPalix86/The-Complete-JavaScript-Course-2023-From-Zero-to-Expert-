'use strict';

console.log('global contecxt', this);

// in questo caso poiche stiamo usando la strict mode l'oggetto this all'interno del context della funzione ritorna undefined.
// se non stessimo usando la strict mode this ritornerebbe l'oggetto this del context all'interno del quale è
// la funzione è ! quell'undefined significa comunque che la funzione riceve un proprio oggetto this !
const calcAge = function (birthDate) {
  const now = 2023;
  console.log('calcAge', this);
  return now - birthDate;
};
calcAge();

// le arrow function non ottengono mai un'oggetto this di loro proprietà ma ereditano sempre del context
// all'interno del quale si trovano, in queesto caso il global scope
const calcAgeArrow = birthDate => {
  console.log('calcAgeArrow', this);

  const now = 2023;
  return now - birthDate;
};
calcAgeArrow();

// quando abbiamo this all'interno di un metodo (un metodo è una funzione in un oggetto)
// this sarà l'oggetto che sta chiamando il metodo
const mirco = {
  year: 1995,
  name: 'mirco',
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
  test: this,
};
mirco.calcAge();
console.log('mirco test', mirco.test);

const matilda = {
  year: 2017,
};

// poiche in javascript le funzioni sono valori possiamo fare :
matilda.calcAge = mirco.calcAge;

// cosa sara this ?
// abbiamo detto che this si riferisce sempre all'oggetto che chiama il metodo
// quindi in questo caso this puntera a matilda
matilda.calcAge();

// in questo caso?
const f = mirco.calcAge;
// in questo caso this sara undefined, e inoltre la funzione tornerà errore perche cerchera di chiamare
// this.year ma this sarà undefined e undefined.year da errore
// f();

// vediamo ora meglio le differenze tra arrow functions e funzioni normali

// tenieamo presente che un'oggetto non è un blocco di codice e quindi non crea il suo contesto!
// inoltre il this all'interno di una funzione normale fa riferimento sempre all'oggetto che chiama la funzione,
// infatti this in una funzione chiamata (dal nulla) è undefined. Invece se chiamiamo la funzione tramite: oggetto.funzione(), e dentro la funzione
// ci sarà il this, quel this farà riferimento all'oggetto che sta chiamando la funzione.
// le arrow functions invece non ottengono mai un loro this anche se vengono chiamate tramite un oggetto,
// ma ereditano sempre il this del contesto dentro il quale si trovano durante la definizione della funzione.
const mirco1 = {
  year: 1995,
  name: mirco,

  // poiche per chiamare calcAge devo necessariamente usare mirco1.calcAge() e poiche calcAge è una funzione
  // normale, this dentro calcAge ritornerà l'oggetto che la sta chiamando, ovvero mirco1
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },

  // ricordiamo che nelle arrow functions this fa sempre parte del contesto nella quale la arrow function è immersa (in questo caso globale)
  // quindi greet anche se sara chiamata tramite un'oggetto ritornara sempre l'oggetto globale
  greet: () => {
    console.log(`hey ${this.firstname}`);
  },
};
mirco1.calcAge();
mirco1.greet();

// ora vediamo perche var non dovrebbe essere mai usata.
// se dichiariamo una var questa andra a far parte automaticamente del contesto all'interno del quale si trova
// cosa che non avviene con let e const
var firstName = 'gloria'; // firstName poiche è stata dichiarata con var andra dentro window che è l'attuale contesto

const mirco2 = {
  year: 1995,
  firstName: mirco,

  // in questo caso vale tutto quello che abbiamo detto prima
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },

  // in questo caso anche ma con una differenza: infatti abbiamo dichiarato una var che è andata a finire all'interno
  // del contesto globale che è window
  // la arrow function in questo caso eredita dentro this  proprio il contesto nel quale è immersa (ovvero window)
  greet: () => {
    console.log(`hey ${this.firstName}`);
  },
};

// chiamando mirco2.greet otterrò ciao gloria ! e questo perche per caso abbiamo chiamato una varibile firstname
// che è andata a finire dentro window poiche dichiarata con var. questo comportamento può portare a bug assurdi e
// molto difficili da trovare ! mai usare var !!!
// un'altro insegnamento che potremmo trarre da questo pezzo di codice è che non bisognerebbe mai usare una
// arrow function come metodo ( metodo = funzione dentro oggetto )
// usando le normali funzioni come metodo non possiamo avere comportamenti inaspettati di this
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
// mirco3.calcAge();

// per aggirare il problema appena visto si fa cosi :
const mirco4 = {
  firstName: 'mirco',
  year: 1995,

  calcAge: function () {
    console.log(2023 - this.year);

    // salvando this in self in questo modo riusciamo ad accedere perche diventa una semplice variabile
    // all'esterno della funzione che quindi posso usare tranquillamente dall'interno della funzione
    // questa soluzione veniva usata prima di ES6 (è ancora valida), ora si fa diversamente !
    // la soluzione è usare una arrow function !
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

    // salvando this in self in questo modo riusciamo ad accedere perche diventa una semplice variabile
    // all'esterno della funzione che quindi posso usare tranquillamente dall'interno della funzione
    // questa soluzione veniva usata prima di ES6 (è ancora valida), ora si fa diversamente !
    // la soluzione è usare una arrow function che eredita direttamente il this del contesto dentro il quale sta!
    const isMillennial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  },
};

mirco5.calcAge();

// le funzioni quando vengono chiamate oltre ad ottenere l'oggetto this, ottengono l'oggetto arguments che contiene
// tutti gliargomenti passati alla funzione stessa
// questo significa che posso anche passare n argomenti nonostante ne ho dichiarati solo 2, e avere accesso aquegli
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
