
const places = [
    {
        name: "Chateau des Cotes",
        image: "./assets/images/cote1.jpg",
        number: "num0",
        pic1: "./assets/images/cote1.jpg", 
        pic2: "./assets/images/cote2.jpg", 
        pic3:"./assets/images/cote3.jpg", 
        pic4: "./assets/images/cote4.jpg", 
        pic5:"./assets/images/cote5.jpg",
        pic6:"./assets/images/cote6.jpg",
        link: "https://www.zankyou.fr/f/chateau-de-la-cote-7718#13",
        address: "Château de La Côte Biras  24310",
        lat: 53.093479,
        long: -7.905547
    },
    {
        name: "Domaine des Grillons",
        image: "./assets/images/grillons1.jpg",
        number: "num1",
        pic1: "./assets/images/grillons1.jpg", 
        pic2: "./assets/images/grillons2.jpg", 
        pic3:"./assets/images/grillons3.jpg", 
        pic4: "./assets/images/grillons4.jpg", 
        pic5:"./assets/images/grillons5.jpg",
        pic6:"./assets/images/unknown.jpg",
        link: "https://www.zankyou.fr/f/chateau-de-la-cote-7718#13",
        address: "Château de La Côte Biras 24310"
    },
    {
        name: "Domaine des Fougeres",
        image: "./assets/images/fougere1.jpg",
        number: "num2",
        pic2: "./assets/images/fougere2.jpg", 
        pic3:"./assets/images/fougere3.jpg", 
        pic4: "./assets/images/fougere4.jpg", 
        pic5:"./assets/images/fougere5.jpg",
        pic6:"./assets/images/fougere1.jpg",
        link: "https://www.mariages.net/domaine-mariage/domaine-les-fougeres--e134862",
        address: "Château de La Côte Biras 24310"
    },
    {
        name: "Domaine de Sarson",
        image: "./assets/images/sarson1.jpg",
        number: "num3",
        pic2: "./assets/images/sarson2.jpeg", 
        pic3:"./assets/images/sarson3.jpg", 
        pic4: "./assets/images/sarson4.jpg", 
        pic5:"./assets/images/sarson5.jpg",
        pic6:"./assets/images/sarson1.jpg",
        link: "https://www.mariages.net/domaine-mariage/domaine-de-sarson--e107150",
        address: "Château de La Côte Biras 24310"
    },
    {
        name: "Domaine de Beaufort",
        image: "./assets/images/beaufort1.jpg",
        number: "num4",
        pic2: "./assets/images/beaufort2.jpg", 
        pic3:"./assets/images/beaufort3.jpg", 
        pic6:"./assets/images/beaufort1.jpg",
        link: "https://www.mariages.net/domaine-mariage/domaine-de-beaufort--e183659",
        address: "Château de La Côte Biras 24310"
    },
    {
        name: "Domaine d'Essendieras'",
        image: "./assets/images/essend1.jpg",
        number: 5
    },
    {
        name: "Domaine de Paguy",
        image: "./assets/images/paguy1.png",
        number: 6
    },
    {
        name: "Domaine de Vavril",
        image: "./assets/images/vavril1.jpg",
        number: 7
    },
    {
        name: "Chateau Pape Clement",
        image: "./assets/images/pape1.jpg",
        number: 8
    },
    {
        name: "Bastide des Adrets",
        image: "./assets/images/bastide1.jpg",
        number: 9
    },
    {
        name: "Chateau des oliviers de Salette",
        image: "./assets/images/salettes1.jpg",
        number: 10
    }

]

showContent()


function showContent(){
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
button.text('See More!');
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

document.getElementById(element.number).onclick = function(){
    $(".locations").empty();

    var detailsDiv = $("<div>");
    detailsDiv.addClass("details");

   
    var detailsName = $("<h1>");
    detailsName.text(element.name);
    detailsName.addClass("row");
    $(detailsDiv).append(detailsName);

    var secondRow = $("<div>");
    secondRow.addClass("row");
    $(detailsDiv).append(secondRow);



    var imgDiv = $("<div>");
    imgDiv.addClass("images col-lg-6");
    $(secondRow).append(imgDiv);

    


    var placeImg = $("<img>");
    placeImg.attr("src", element.pic6);
    placeImg.addClass("detailsImg");
    $(imgDiv).append(placeImg);
    var placeImg = $("<img>");
    placeImg.attr("src", element.pic2);
    placeImg.addClass("detailsImg");
    $(imgDiv).append(placeImg);
    var placeImg = $("<img>");
    placeImg.attr("src", element.pic3);
    placeImg.addClass("detailsImg");
    $(imgDiv).append(placeImg);
    var placeImg = $("<img>");
    placeImg.attr("src", element.pic4);
    placeImg.addClass("detailsImg");
    $(imgDiv).append(placeImg);
    var placeImg = $("<img>");
    placeImg.attr("src", element.pic5);
    placeImg.addClass("detailsImg");
    $(imgDiv).append(placeImg);
    var placeImg = $("<img>");
    placeImg.attr("src", element.pic1);
    placeImg.addClass("detailsImg");
    $(imgDiv).append(placeImg);

  var textDiv = $("<div>");
    textDiv.addClass("col-lg-6");
    $(secondRow).append(textDiv);

   
    
    $(".container").append(detailsDiv);
  };

    


});
}


// $(".fancy-cards").show();

    $(".fancy-cards").show();
    $(".details").hide();

