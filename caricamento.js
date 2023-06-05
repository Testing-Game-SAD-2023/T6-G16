// Funzione per caricare una classe Java sul backend
function caricamentoClasseJava(file) {
  var formData = new FormData();
  formData.append('file', file);

  fetch('/api/caricaClasseJava', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // La risposta dal backend può contenere informazioni sul caricamento
    console.log(data);
  })
  .catch(error => {
    console.error('Si è verificato un errore:', error);
  });
}

// Esempio di utilizzo
var fileDaCaricare = document.getElementById('fileInput').files[0];
caricamentoClasseJava(fileDaCaricare);
