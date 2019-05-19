const places = [
  {
    name: "Chateau des Cotes",
    image: "./assets/images/cote1.jpg",
    number: "num0",
    pic1: "./assets/images/cote1.jpg",
    pic2: "./assets/images/cote2.jpg",
    pic3: "./assets/images/cote3.jpg",
    pic4: "./assets/images/cote4.jpg",
    pic5: "./assets/images/cote5.jpg",
    pic6: "./assets/images/cote6.jpg",
    link: "https://www.zankyou.fr/f/chateau-de-la-cote-7718#13",
    lat: 45.29813,
    long: 0.365976
  },
  {
    name: "Domaine des Grillons",
    image: "./assets/images/grillons1.jpg",
    number: "num1",
    pic1: "./assets/images/grillons1.jpg",
    pic2: "./assets/images/grillons2.jpg",
    pic3: "./assets/images/grillons3.jpg",
    pic4: "./assets/images/grillons4.jpg",
    pic5: "./assets/images/grillons5.jpg",
    pic6: "./assets/images/unknown.jpg",
    link:
      "https://www.mariages.net/domaine-mariage/domaine-des-grillons--e150904",
    lat: 44.492371,
    long: 4.7366
  },
  {
    name: "Domaine des Fougeres",
    image: "./assets/images/fougere1.jpg",
    number: "num2",
    pic2: "./assets/images/fougere1.jpg",
    pic3: "./assets/images/fougere2.jpg",
    pic4: "./assets/images/fougere3.jpg",
    pic5: "./assets/images/fougere4.jpg",
    pic6: "./assets/images/fougere5.jpg",
    link:
      "https://www.mariages.net/domaine-mariage/domaine-les-fougeres--e134862",
    lat: 44.69457,
    long: 4.81775
  },
  {
    name: "Domaine de Sarson",
    image: "./assets/images/sarson1.jpg",
    number: "num3",
    pic2: "./assets/images/sarson2.jpeg",
    pic3: "./assets/images/sarson3.jpg",
    pic4: "./assets/images/sarson4.jpg",
    pic5: "./assets/images/sarson5.jpg",
    pic6: "./assets/images/sarson1.jpg",
    link: "https://www.mariages.net/domaine-mariage/domaine-de-sarson--e107150",
    lat: 44.4384,
    long: 4.87257
  },
  {
    name: "Domaine de Beaufort",
    image: "./assets/images/beaufort1.jpg",
    number: "num4",
    pic1: "./assets/images/beaufort4.jpg",
    pic2: "./assets/images/beaufort2.jpg",
    pic3: "./assets/images/beaufort3.jpg",
    pic4: "./assets/images/beaufort1.jpg",
    pic5: "./assets/images/beaufort5.jpg",
    pic6: "./assets/images/beaufort6.jpg",

    link:
      "https://www.mariages.net/domaine-mariage/domaine-de-beaufort--e183659",
    lat: 45.06131,
    long: 0.37814
  },
  {
    name: "Domaine d'Essendieras'",
    image: "./assets/images/essend1.jpg",
    number: "num5",
    pic1: "./assets/images/essend1.jpg",
    pic2: "./assets/images/essend2.jpg",
    pic3: "./assets/images/essend3.jpg",
    pic4: "./assets/images/essend4.jpg",
    pic5: "./assets/images/essend5.jpg",
    pic6: "./assets/images/essend6.jpg",
    link: "http://www.essendieras.fr/",
    lat: 45.35528,
    long: 1.09204
  },
  {
    name: "Domaine de Paguy",
    image: "./assets/images/paguy1.png",
    number: "num6",
    pic2: "./assets/images/paguy1.png",
    pic3: "./assets/images/paguy2.png",
    pic4: "./assets/images/paguy3.png",
    pic5: "./assets/images/paguy4.png",
    link:
      "https://www.mariages.net/domaine-mariage/le-domaine-de-paguy--e120932",
    lat: 43.97882,
    long: -0.24473
  },
  {
    name: "Domaine de Vavril",
    image: "./assets/images/vavril1.jpg",
    number: "num7",
    pic2: "./assets/images/vavril1.jpg",
    pic3: "./assets/images/vavril2.jpg",
    pic4: "./assets/images/vavril3.jpg",
    pic5: "./assets/images/vavril4.jpg",
    pic6: "./assets/images/vavril5.jpg",
    link: "https://www.mariages.net/domaine-mariage/domaine-de-vavril--e105355",
    lat: 47.35119,
    long: 2.60777
  },
  {
    name: "Chateau Pape Clement",
    image: "./assets/images/pape1.jpg",
    number: "num8",
    pic1: "./assets/images/pape6.jpg",
    pic2: "./assets/images/pape2.jpg",
    pic3: "./assets/images/pape3.jpg",
    pic4: "./assets/images/pape4.jpg",
    pic5: "./assets/images/pape5.jpg",
    pic6: "./assets/images/pape1.jpg",
    link:
      "https://www.mariages.net/chateau-mariage/chateau-pape-clement--e16809",
    lat: 44.80886,
    long: -0.63461
  },
  {
    name: "Bastide des Adrets",
    image: "./assets/images/bastide1.jpg",
    number: "num9",
    pic2: "./assets/images/bastide2.jpg",
    pic3: "./assets/images/bastide3.jpg",
    pic4: "./assets/images/bastide4.jpg",
    pic5: "./assets/images/bastide5.jpg",
    pic6: "./assets/images/bastide1.jpg",
    link: "https://www.1001salles.com/mariage/AUBERGE-DES-ADRETS.aspx",
    lat: 43.4325,
    lont: 6.73511
  },
  {
    name: "Chateau des oliviers de Salette",
    image: "./assets/images/salettes1.jpg",
    number: "num10",
    pic1: "./assets/images/salettes6.jpg",
    pic2: "./assets/images/salettes2.jpg",
    pic3: "./assets/images/salettes3.jpg",
    pic4: "./assets/images/salettes4.jpg",
    pic5: "./assets/images/salettes5.jpg",
    pic6: "./assets/images/salettes1.jpg",
    link: "1205 Route du Château, 26450 Charols, France",
    lat: 44.58727,
    long: 4.9691
  }
];

// showContent();

function showContent() {
  places.forEach(function(element) {
    var placeDiv = $("<div>");
    placeDiv.addClass("fancy-cards col-md-4");
    var fancyDiv = $("<div>");
    fancyDiv.addClass("fancy-card");
    $(placeDiv).append(fancyDiv);
    var topDiv = $("<div>");
    topDiv.addClass("top");
    $(fancyDiv).append(topDiv);
    var placeImg = $("<img>");
    placeImg.attr("src", element.image);
    placeImg.addClass("placesImg");
    $(topDiv).append(placeImg);
    var captionDiv = $("<div>");
    captionDiv.addClass("caption");
    $(topDiv).append(captionDiv);
    var placeName = $("<h3>");
    placeName.text(element.name);
    $(captionDiv).append(placeName);
    var button = $("<button>");
    button.text("See More!");
    button.addClass("btn btn-outline-secondary more");
    button.attr("id", element.number);
    $(captionDiv).append(button);

    var middleDiv = $("<div>");
    middleDiv.addClass("middle");
    $(fancyDiv).append(middleDiv);

    var bottomDiv = $("<div>");
    bottomDiv.addClass("bottom");
    $(fancyDiv).append(bottomDiv);
    $(".locations").append(placeDiv);

    document.getElementById(element.number).onclick = function() {
      $(".locations").empty();
      topFunction();

      var detailsName = $("<h1>");
      detailsName.text(element.name);
      $(".firstRow").append(detailsName);

      var placeImg = $("<img>");
      placeImg.attr("src", element.pic6);
      placeImg.addClass("detailsImg");
      $(".imgDiv").append(placeImg);
      var placeImg = $("<img>");
      placeImg.attr("src", element.pic2);
      placeImg.addClass("detailsImg");
      $(".imgDiv").append(placeImg);
      var placeImg = $("<img>");
      placeImg.attr("src", element.pic3);
      placeImg.addClass("detailsImg");
      $(".imgDiv").append(placeImg);
      var placeImg = $("<img>");
      placeImg.attr("src", element.pic4);
      placeImg.addClass("detailsImg");
      $(".imgDiv").append(placeImg);
      var placeImg = $("<img>");
      placeImg.attr("src", element.pic5);
      placeImg.addClass("detailsImg");
      $(".imgDiv").append(placeImg);
      var placeImg = $("<img>");
      placeImg.attr("src", element.pic1);
      placeImg.addClass("detailsImg");
      $(".imgDiv").append(placeImg);

      var detName = $("<h3>");
      detName.text("Advantages");
      $(".textDiv").append(detName);

      initMap();
      function initMap() {
        // The location of Uluru
        var uluru = { lat: element.lat, lng: element.long };
        // The map, centered at Uluru
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 6,
          center: uluru
        });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
      }

      document.getElementById("map").style.overflow = "scroll";
      document.getElementById("map").style.position = "static";
    };
  });
}

// $(".fancy-cards").show();

$(".fancy-cards").show();
$(".details").hide();
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
