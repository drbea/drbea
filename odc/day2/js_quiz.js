// Ce code est un jeu de devinettes qui permet à l'utilisateur de deviner des mots ou des phrases.

// Variables
let tape_mot = false; // Variable booléenne pour indiquer si l'utilisateur a entré un mot.
let motApplication = "hello"; // Mot à deviner.
let mot = ""; // Mot entré par l'utilisateur.
let listeMot = ["Cachalot", "Petunia", "Serviette"]; // Liste des mots à deviner.
let listePhrases = ["hello world", "Pas de panique", "Merci pour le poisson"]; // Liste des phrases à deviner.
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

// Affichage du score final
console.log("Score final : " + score);
