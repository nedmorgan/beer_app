$(document).ready(function() {
  console.log("ready")

  $("#submit").click(function() {
      $.ajax({
        type: "GET",
        url: "https://api.brewerydb.com/v2/beers?key=5d4596667cea2ebe5cfcfce6055b2745",
        dataType: "json",
        success: function(blob) {
          console.log(blob);
        },
        error: function(xhr, status, error) {
          console.log("Error: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
      });
    });
});
