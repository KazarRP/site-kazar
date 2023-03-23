// Fonction pour incrémenter ou décrémenter la valeur en cliquant sur les boutons + et -
function updateValue(element, amount) {
  // Récupérer l'élément span correspondant à la valeur
  var valueElement = element.parentElement.querySelector(".value");
  // Convertir la valeur en nombre
  var value = parseInt(valueElement.innerText);
  // Ajouter ou soustraire l'amount à la valeur
  value += amount;
  // S'assurer que la valeur reste dans les limites de 0 et 20
  if (value < -1) {
    value = -1;
  } else if (value > 20) {
    value = 20;
  }
  // Mettre à jour la valeur affichée
  valueElement.innerText = value;
}

// Récupérer tous les boutons avec la classe "minus-btn"
var minusButtons = document.querySelectorAll(".minus-btn");
// Parcourir les boutons et ajouter un écouteur d'événement pour le clic
for (var i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function () {
    // Appeler la fonction pour décrémenter la valeur
    updateValue(this, -1);
  });
}

// Récupérer tous les boutons avec la classe "plus-btn"
var plusButtons = document.querySelectorAll(".plus-btn");
// Parcourir les boutons et ajouter un écouteur d'événement pour le clic
for (var i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function () {
    // Appeler la fonction pour incrémenter la valeur
    updateValue(this, 1);
  });
}



