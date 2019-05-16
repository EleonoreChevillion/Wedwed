$(document).ready(function() {
    var topics = [
      "wedding",
      "engagement",
      "bride",
      "groom",
      "crazy",
      "bridezilla"
    ];
  
    function showGif() {
      var search = $(this).attr("data-name");
      var queryurl =
        "https://api.giphy.com/v1/gifs/search?q=" +
        search +
        "&api_key=AbYBG1eQvY6HPMyR16YEMuhr9g25aREW";
      console.log(queryurl);
      $.ajax({
        url: queryurl,
        method: "GET"
      }).then(function(response) {
        var giphyDiv = $("<div class = 'gifs'>");
        for (var i = 0; i < 11; i++) {
          var imgURL = response.data[i].images.fixed_height_still.url;
          var gifURL = response.data[i].images.fixed_height.url;
          var image = $("<img>").attr("src", imgURL);
          image.addClass("gif");
          image.attr("data-static", imgURL);
          image.attr("data-gif", gifURL);
          giphyDiv.append(image);
        //   var rating = $("<h6>");
        //   rating.addClass("card-subtitle mb-2 text-muted");
        //   rating.text("Rating: " + response.data[i].rating);
        //   $(giphyDiv).append(rating);
        }
  
        $("#gifList").empty();
        $("#gifList").prepend(giphyDiv);
      });
    }
  
    function renderButtons() {
      $("#gifList").empty();
  
      for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("gif-btn");
        a.addClass("btn btn-outline-secondary");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons-view").append(a);
      }
    }
  
    $("#add-gif").on("click", function(event) {
      event.preventDefault();
      topics = [];
      var newGif = $("#giphy-input")
        .val()
        .trim();
      topics.push(newGif);
  
      renderButtons();
    });
  
    $(document).on("click", ".gif-btn", showGif);
  
    renderButtons();
  
    $("body").on("click", ".gif", function() {
      var newSrc = $(this).attr("src");
      if ($(this).hasClass("gifOn")) {
        newSrc = $(this).attr("data-static");
      } else {
        newSrc = $(this).attr("data-gif");
      }
      $(this).attr("src", newSrc);
      $(this).toggleClass("gifOn");
    });
  
    // $("body").on("click", ".gif", function() {
    //   var src = $(this).attr("src");
    //   if ($(this).hasClass("gifOn")) {
    //     //stop
    //     $(this).attr("src", src.replace(/\.gif/i, "_s.gif"));
    //     $(this).removeClass("gifOn");
    //   } else {
    //     //play
    //     $(this).addClass("gifOn");
    //     $(this).attr("src", src.replace(/\_s.gif/i, ".gif"));
    //   }
    // });
  });