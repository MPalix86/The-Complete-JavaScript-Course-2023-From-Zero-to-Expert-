const age = "18";
/**
 * === non applica una conversione di dati prima di effettuare un confronto
 * implica che 23 != '23'
 */
if (age === 18) console.log(`=== non converte in automatico i tipi ${age}`);

/**
 * === applica una conversione di dati prima di effettuare un confronto
 * implica che 23 = '23'
 */
if (age == 18) console.log(`== converte in automatico i tipi ${age}`);
