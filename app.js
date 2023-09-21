// JE FAIS UN APPEL A LA CONSOLE POUR VERIFIER QUE LE FICHIER EST BIEN LIE
console.log("app.js is linked");

// JE ME CONNECTE AU DOM DE LA PAGE HTML VIA LES BALISES work-display-time pause-display-time
let workDisplayTime = document.querySelector(".work-display-time");
let pauseDisplayTime = document.querySelector(".pause-display-time");
let workBlock = document.querySelector(".work-block");
let pauseBlock = document.querySelector(".pause-block");
let cycleDisplay = document.querySelector(".cycles");


// Variable pour stocker l'ID de l'intervalle
let countdown;

// Fonction pour démarrer le compte à rebours de la pause
function startPauseCountdown() {
    // Conversion de 5 minutes en secondes
    let time = 5 * 60;
    // Arrêt du compte à rebours en cours si nécessaire
    if (countdown) clearInterval(countdown);

    pauseBlock.style.backgroundColor = "darkblue";
    pauseBlock.style.color = "white";
    // Démarrage d'un nouvel intervalle qui se répète chaque seconde
    countdown = setInterval(() => {
      // Décrémentation du temps restant
      time--;
      // Conversion du temps restant en minutes et secondes
      let minutes = Math.floor(time / 60);
      let seconds = time % 60;
      // Mise à jour de l'affichage du compte à rebours
      // Si le nombre de minutes ou de secondes est inférieur à 10, on ajoute un zéro devant pour qu'il s'affiche toujours avec deux chiffres.
      pauseDisplayTime.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
      // Arrêt du compte à rebours lorsqu'il atteint zéro
      if (time <= 290) {
        clearInterval(countdown);
        pauseDisplayTime.textContent = "05:00";
        startCountdown();
        pauseBlock.style.backgroundColor = "white";
        pauseBlock.style.color = "black";
      }
    }, 1000);

};

// Fonction pour démarrer le compte à rebours de 30 minutes
function startCountdown() {
  // Conversion de 30 minutes en secondes
  let time = 30 * 60;

  workBlock.style.backgroundColor = "green";

  // Arrêt du compte à rebours en cours si nécessaire
  if (countdown) clearInterval(countdown);

  // Démarrage d'un nouvel intervalle qui se répète chaque seconde
  countdown = setInterval(() => {
    // Décrémentation du temps restant
    time--;

    // Conversion du temps restant en minutes et secondes
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Mise à jour de l'affichage du compte à rebours
    // Si le nombre de minutes ou de secondes est inférieur à 10, on ajoute un zéro devant pour qu'il s'affiche toujours avec deux chiffres.
    workDisplayTime.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;

    // Arrêt du compte à rebours lorsqu'il atteint zéro
    if (time <= 0) clearInterval(countdown);
    if (minutes === 29 && seconds === 50) {
      startPauseCountdown();
      workBlock.style.backgroundColor = "white";
      workBlock.style.color = "black";
    }
}, 1000);

  // A chaque fois que la fonction startCountdown est lancée, j'ajoute 1 au compteur de sessions

  // Augmente le compteur de cycles à chaque fois que cette fonction est appelée
  sessionCounter+=1;
  cycleDisplay.textContent = `Cycle(s) : ${sessionCounter}`;  
};

// J'AJOUTE UN ECOUTEUR D'EVENEMENT SUR LE BOUTON START
let startButton = document.querySelector(".start-button");

// Au clic sur le bouton start, je lance la fonction startCountdown.
startButton.addEventListener("click", function () {
  // JE VERIFIE QUE LE BOUTON EST BIEN LIE
  console.log("start button is clicked");
  //   Je lance la fonction startCountdown
  startCountdown();
});

// J'ajoute un ecouteur d'evenement sur le bouton pause
let pauseButton = document.querySelector(".pause-button");

// Au clic sur le bouton pause, je lance la fonction startPauseCountdown.
pauseButton.addEventListener("click", function () {
  // Je vérifie que le bouton est bien lié
  console.log("pause button is clicked");
  // Je lance la fonction startPauseCountdown
  startPauseCountdown();
});

//  J'AJOUTE UN ECOUTEUR D'EVENEMENT SUR LE BOUTON RESET
let resetButton = document.querySelector(".reset-button");

// Au clic sur la bouton reset, j'effectue une réintialisation des comptes à rebours.
resetButton.addEventListener("click", function () {
  // JE VERIFIE QUE LE BOUTON EST BIEN LIE
  console.log("reset button is clicked");

    // Arrêt du compte à rebours en cours si nécessaire
  if (countdown) clearInterval(countdown);

    // Je réinitialise le compte à rebours de travail
    workDisplayTime.textContent = "30:00";
    // Je réinitialise le compte à rebours de pause
    pauseDisplayTime.textContent = "05:00";

    // Je réinitialise le compteur de cycles.
    sessionCounter = -1;
    cycleDisplay.textContent = "Cycle(s) : 0";

    // Je réinitialise le style des blocs
    workBlock.style.backgroundColor = "white";
    pauseBlock.style.backgroundColor = "white";
    pauseBlock.style.color = "black";
});

// Ajout d'un écouteur d'événements sur le bouton de démarrage
startButton.addEventListener("click", startCountdown);

// Je crée une variable pour stocker le nombre de sessions
let sessionCounter = -1;


