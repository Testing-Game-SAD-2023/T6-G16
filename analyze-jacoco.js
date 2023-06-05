const fs = require('fs');
const { parseString } = require('xml2js');

// Funzione per analizzare il file XML Jacoco
function analizzaFileJacoco(filePath) {
  const xmlData = fs.readFileSync(filePath, 'utf-8');

  parseString(xmlData, (err, result) => {
    if (err) {
      console.error('Errore durante l\'analisi del file XML:', err);
      return;
    }

    // Esempio di accesso ai dati di copertura
    const packageCoverage = result.report.package[0];
    const className = packageCoverage.class[0].$.name;
    const methodCoverage = packageCoverage.class[0].method;
    const instructionCoverage = packageCoverage.counter.find(counter => counter.$.type === 'INSTRUCTION');
    const lineCoverage = packageCoverage.counter.find(counter => counter.$.type === 'LINE');

    console.log('Nome della classe:', className);
    console.log('Copertura delle istruzioni:', instructionCoverage.$.covered);
    console.log('Copertura delle linee:', lineCoverage.$.covered);
    console.log('Metodi:', methodCoverage);
    // Puoi accedere ad altri dati di copertura come desiderato

    // Esegui altre operazioni sull'analisi dei dati di copertura qui
  });
}

// Esempio di utilizzo
const fileJacocoPath = 'java-code-editor\src\jacoco.xml';
analizzaFileJacoco(fileJacocoPath);
