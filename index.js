$(document).ready(function(){
  // Pobierz dane z API
  $.getJSON("https://yourAPIurl.com", function(data){
    // Pobierz tylko pierwsze 3 ogłoszenia
    var announcements = data.slice(0,3);
    // Iteruj przez ogłoszenia i dodaj je do kontenera
    announcements.forEach(function(announcement){
      $("#announcementContainer").append(
        '<div class="announcement">' +
          '<h3>' + announcement.title + '</h3>' +
          '<p>' + announcement.description + '</p>' +
        '</div>'
      );
    });
  });
});
