// Ce code est un jeu de devinettes qui permet à l'utilisateur de deviner des mots ou des phrases.
let score = 0; // Score de l'utilisateur.

// Boucle de validation de l'entrée de l'utilisateur
function chooseUserInput(){
 
  console.log("Choisissez 'mot' ou 'phrase'");
  userInput = prompt("entrez 'mot' ou 'phrase' ")
  while (userInput != "mot" && userInput != "phrase") {
    console.log("Mauvais mot, choisissez un mot correct.");
    alert("Mauvais mot, choisissez un mot correct.");
    userInput = prompt("Entrer un mot : "); 
  }
  return userInput
}


// Initialisation

userInput = chooseUserInput()


// Début du jeu
function lancerBoucleDeJeu(userInput, listeMot, listePhrases){
  let nombreDeMotBienTape = []
  if (userInput === "mot") {
    for (let i = 0; i < listeMot.length; i++) {
      mot = prompt("Entrer le mot " + String(i + 1) + " du tableau : ");
      if (mot === listeMot[i]) {
        console.log("Bravo ! Vous avez trouvé.");
        score += 1;
        nombreDeMotBienTape.push(listeMot[i])
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
        nombreDeMotBienTape.push(listeMot[i])
      } else {
        console.log("Dommage, vous avez raté. Merci de recommencer.");
      }
    }
  }
  console.log("le nombre de mot bien tapes est: ", nombreDeMotBienTape)
  return score
}

 // fonctiom pour afficher un message contenant le score apres le jeu
 function displayResult(score, nbrQuestions){
  message = "vous avez repondu a: " + score + " questions sur " + nbrQuestions + "\nScore final : " + score;
  return message
}


function lancerJeu(){
  userInput = chooseUserInput()

  score = lancerBoucleDeJeu(userInput, listeMot, listePhrases)
  
// Affichage du score final
  console.log(displayResult(score, listeMot.length))
}


lancerJeu()

