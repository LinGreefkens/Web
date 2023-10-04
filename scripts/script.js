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