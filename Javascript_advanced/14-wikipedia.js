function createElement(data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = `${data}`;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  xhr.open('GET', url, true); // 'true' signifie asynchrone
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) { // Vérifier si la requête est complète et status OK
      const response = JSON.parse(xhr.responseText);
      const pages = response.query.pages;
      const page = pages[Object.keys(pages)[0]]; // Obtenir la première page du résultat
      const extract = page.extract;

      // Appeler la fonction de rappel avec l'extrait de la réponse
      callback(extract);
    } else {
        console.error('Erreur de requête', xhr.status, xhr.statusText);
      }
  };
  xhr.send(); // Pour les requêtes GET
}

// Appeler queryWikipedia avec createElement comme fonction de rappel
queryWikipedia(createElement);
