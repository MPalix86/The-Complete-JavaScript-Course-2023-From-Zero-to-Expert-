/** 
 * Oltre ai moduli nativi js, ci sono anche altri sitemi che implementano i moduli in js, man 
 * non sono nativi. 
 * Ci concentriamo sui moduli commoJS. questi moduli sono importanti perche sono qualli utilizzadi da node
 * fino a poco fa.Solo recentemente i moduli ES6 sono stati implementati. La conseguenza di questo è che 
 * quasi ogni modulo presente su npm è implementato tramite CommoJS. La ragione di questo è anche che originariamente
 * npm è stato creato solo per node, solo dopo è diventato lo standard per javascritpt in generale
 * 
 * e funzionano cosi :
 */

export.addToCart = function(){
// code here
}

// per importare invece

const addToCart = require('./3_commonjs.js')

/** 
 * ovviamente questo tipo di modluli non funzioneranno nel browser ! ma funzionaeranno solo in node. 
 * tuttavia auspicabilmente i moduli ES6 rimpiazzero alla lunga questo sistema usato da node
 */