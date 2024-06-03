function studentHogwarts() {
    // Variables privées
    let privateScore = 0;
    let name = null;

    // Méthode privée
    function changeScoreBy(points) {
        privateScore += points;
    }

    return {
        // Méthode publique pour définir le nom
        setName: function(newName) {
            name = newName;
        },
        // Méthode publique pour récompenser l'étudiant
        rewardStudent: function() {
            changeScoreBy(1);
        },
        // Méthode publique pour pénaliser l'étudiant
        penalizeStudent: function() {
            changeScoreBy(-1);
        },
        // Méthode publique pour obtenir le score
        getScore: function() {
            return `${name}: ${privateScore}`;
        }
    };
}

// Créer une instance pour Harry
const harry = studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Devrait afficher "Harry: 4"

// Créer une instance pour Draco
const draco = studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Devrait afficher "Draco: -2"
