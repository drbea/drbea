// Ce code est un jeu de devinettes qui permet à l'utilisateur de deviner des mots ou des phrases.
let score = 0; // Score de l'utilisateur.

// Initialisation
console.log("Choisissez 'mot' ou 'phrase'");
userInput = prompt("Entrer un mot : ");

// Boucle de validation de l'entrée de l'utilisateur
while (userInput != "mot" && userInput != "phrase") {
  console.log("Mauvais mot, choisissez un mot correct.");
  alert("Mauvais mot, choisissez un mot correct.");
  userInput = prompt("Entrer un mot : ");
}

// Début du jeu
if (userInput === "mot") {
  for (let i = 0; i < listeMot.length; i++) {
    mot = prompt("Entrer le mot " + String(i + 1) + " du tableau : ");
    if (mot === listeMot[i]) {
      console.log("Bravo ! Vous avez trouvé.");
      score += 1;
    } else {
      console.log("Dommage, vous avez raté. Merci de recommencer.");
    }
  }
} else if (userInput === "phrase") {
  for (let i = 0; i < listePhrases.length; i++) {
    mot = prompt("Entrer la phrase " + String(i + 1) + " du tableau : ");
    if (mot === listePhrases[i]) {
      console.log("Bravo ! Vous avez trouvé.");
      score += 1;
    } else {
      console.log("Dommage, vous avez raté. Merci de recommencer.");
    }
  }
}

 // fonctiom pour afficher un message contenant le score apres le jeu
function displayMessage(score, nbrQuestions){
    message = "votre score est: " + score + "sur " + nbrQuestions + " questions"
    return message
}

// Affichage du score final
console.log(displayMessage(score, listeMot.length))

console.log("Score final : " + score);
