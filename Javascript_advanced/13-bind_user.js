const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Buillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer"
};

function logWelcomeUser(welcomeString) {
  console.log (`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

// Appel de la fonction avec la chaîne de caractères "Welcome"
bindLogWelcomeUser('Welcome');

// Pour tester le résultat avec une autre chaîne de caractères
bindLogWelcomeUser('Hello');
