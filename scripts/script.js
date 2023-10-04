console.log("hi");

// Selecteer knop hamburgermenu
var hamburgerButton = document.querySelector('.hamburger-menu-button');
// Selecteer het menu (de UL met alle li's)
var menu = document.querySelector('.hamburger-menu');
// selecteert het zoek icoontje in de footer
var searchIcons = document.querySelectorAll('.search-icon');

hamburgerButton.addEventListener('click', function () {
  menu.classList.toggle('active');
  console.log("button is clicked");

  // If menu is geopend dan is het kruisje actief + zoek icoontje weg
  if (menu.classList.contains('active')) {
    hamburgerButton.src = 'images/cross.svg';
    searchIcons.forEach(icon => icon.style.display = 'none');
    // Else menu is gesloten dan is het hamburger menu actief + zoek icoontje zichtbaar
  } else {
    hamburgerButton.src = 'images/hamburgermenu_button.svg';
    searchIcons.forEach(icon => icon.style.display = 'inline');
  }
});



console.log(window.location.pathname);
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
  // /* Selecteer knop justAnnounced */
  var buttonJustAnnounced = document.querySelector(".button_justAnnounced");
  // /* Selecteer articles van justAnnounced */
  var articlesJustAnnounced = document.querySelector(".Articles_justAnnounced");

  // /* Selecteer knop nextUp */
  var buttonNextUp = document.querySelector(".button_nextUp");
  // /* Selecteer articles nextUp */
  var articlesNextUp = document.querySelector(".Articles_nextUp");

  // Functie om knopkleuren bij te werken
  function updateButtonColors(selectedButton, otherButton) {
    selectedButton.style.color = "black";
    otherButton.style.color = "grey";
  }

  // Standaard staat de "Just Announced" knop geselecteerd
  articlesJustAnnounced.classList.remove("hidden");
  articlesNextUp.classList.add("hidden");
  updateButtonColors(buttonJustAnnounced, buttonNextUp);
  // Klik op just announced button
  buttonJustAnnounced.addEventListener("click", function () {
    articlesJustAnnounced.classList.remove("hidden");
    articlesNextUp.classList.add("hidden");
    updateButtonColors(buttonJustAnnounced, buttonNextUp);
  });

  // Klik op next up button
  buttonNextUp.addEventListener("click", function () {
    articlesJustAnnounced.classList.add("hidden");
    articlesNextUp.classList.remove("hidden");
    updateButtonColors(buttonNextUp, buttonJustAnnounced);
  });
}

// Selecteer knop hamburgermenu voor desktop
var hamburgerButtonDesktop = document.querySelector('.hamburger-menu-desktop-button');

hamburgerButtonDesktop.addEventListener('click', function () {
  menu.classList.toggle('active');
  console.log("button is clicked");

  // If menu is geopend dan is het kruisje actief
  if (menu.classList.contains('active')) {
    hamburgerButtonDesktop.src = 'images/cross_black.svg';
    console.log("kruisje");
  } else {
    hamburgerButtonDesktop.src = 'images/hamburgermenu_button_black.svg';
    console.log("streepjes");
  }
});