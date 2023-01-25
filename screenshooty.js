// Tworzymy tablicę ze zdjęciami
var screenshots = [
  "screenshot1.jpg",
  "screenshot2.jpg",
  "screenshot3.jpg"
];

// Iterujemy przez tablicę i dodajemy zdjęcia do sekcji
screenshots.forEach(function(screenshot) {
  $("#screenshots-container").append("<img src='" + screenshot + "'>");
});
