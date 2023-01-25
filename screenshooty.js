// Tworzymy tablicę ze zdjęciami
var screenshots = [
  "https://github.com/LuckyMan612/Zombies-Infested/blob/main/files/game/images/obraz_2023-01-25_121154054.png?raw=true",
  "https://github.com/LuckyMan612/Zombies-Infested/blob/main/files/game/images/obraz_2023-01-25_122126331.png?raw=true",
  "https://github.com/LuckyMan612/Zombies-Infested/blob/main/files/game/images/obraz_2023-01-25_122338010.png?raw=true",
  "https://github.com/LuckyMan612/Zombies-Infested/blob/main/files/game/images/obraz_2023-01-25_122403069.png?raw=true",
  "https://github.com/LuckyMan612/Zombies-Infested/blob/main/files/game/images/obraz_2023-01-25_122417257.png?raw=true",
  "https://github.com/LuckyMan612/Zombies-Infested/blob/main/files/game/images/obraz_2023-01-25_122427677.png?raw=true",
  "https://github.com/LuckyMan612/Zombies-Infested/blob/main/files/game/images/obraz_2023-01-25_122458297.png?raw=true"
];

// Iterujemy przez tablicę i dodajemy zdjęcia do sekcji
screenshots.forEach(function(screenshot) {
  $("#screenshots-container").append("<img src='" + screenshot + "'>");
});
