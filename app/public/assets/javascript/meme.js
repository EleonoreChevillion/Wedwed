$(document).ready(function() {
  var topics = [
    "wedding",
    "engagement",
    "bride",
    "groom",
    "crazy",
    "bridezilla"
  ];

  var memesCat = [
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
      "&api_key=7Af0rdT1YuefQSEqviYWytgga6q9tLMm";
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
        image.addClass("gif card-img-top col-md-4");
        image.attr("data-static", imgURL);
        image.attr("data-gif", gifURL);
        giphyDiv.append(image);
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

  // function showMeme() {
  //   var searchmeme = $(this).attr("data-meme");
  //   var queryurl =
  //     "http://version1.api.memegenerator.net//Generators_Search?q=";
  //   searchmeme +
  //     "&pageIndex=0&pageSize=12&apiKey=" +
  //     "0e36677b-4de2-4fde-b38f-44d9b8fbf543";

  //   console.log(queryurl);
  //   $.ajax({
  //     url: queryurl,
  //     method: "GET"
  //   }).then(function(response) {
  //     console.log(response);
  //     var memesDiv = $("<div class = 'memes'>");
  //     for (var i = 0; i < 11; i++) {
  //       var imgURL = response.result[i].imageUrl;
  //       var image = $("<img>").attr("src", imgURL);
  //       image.addClass("meme card-img-top col-md-4");
  //       image.attr("data-static", imgURL);
  //       memesDiv.append(image);
  //     }

  //     $("#memesList").empty();
  //     $("#memesList").prepend(memesDiv);
  //   });
  // }
  // memeButtons();
  // function memeButtons() {
  //   $("#memesList").empty();

  //   memesCat.forEach(function(element) {
  //     var a = $("<button>");
  //     a.addClass("meme-btn");
  //     a.addClass("btn btn-outline-secondary");
  //     a.attr("data-meme", element);

  //     a.text(element);
  //     $("#meme-buttons").append(a);
  //   });
  // }

  // $("#add-meme").on("click", function(event) {
  //   event.preventDefault();
  //   memesCat = [];
  //   var newMeme = $("#memes-input")
  //     .val()
  //     .trim();
  //   memesCat.push(newMeme);

  //   memeButtons();
  // });

  // $(document).on("click", ".meme-btn", showMeme);
});
