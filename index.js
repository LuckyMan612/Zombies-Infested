$.getJSON("https://raw.githubusercontent.com/LuckyMan612/Zombies-Infested/main/files/api.json", function(data) {
   var ogloszenia = "";
   $.each(data, function(key, value) {
      ogloszenia += "<div class='ogloszenie'>";
      ogloszenia += "<h3>" + value.nazwa + "</h3>";
      ogloszenia += "<p>" + value.opis + "</p>";
      ogloszenia += "<img src='" + value.zdjecie + "' alt='" + value.nazwa + "'>";
      ogloszenia += "<p>" + value.data + "</p>";
      ogloszenia += "</div>";
   });
   $("#ogloszenia").append(ogloszenia);
});
