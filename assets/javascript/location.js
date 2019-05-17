
const places = [
    {
        name: "Chateau des Cotes",
        image: "./assets/images/cote1.jpg"
    },
    {
        name: "Domaine des Grillons",
        image: "./assets/images/grillons1.jpg"
    }
]


// function Place (name, image){
//     this.placeName = name;
//     this.imgSrc = image;
// }

// const cote = new Place ("Chateau des Cotes", "./assets/images/cote1.jpg");
// const grillons = new Place ("Domaine des Grillons", "./assets/images/grillons1.jpg");
places.forEach(function(element) {
var placeDiv = $("<div>");

placeDiv.addClass("fancy-cards");

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
$(captionDiv).append(button);

var middleDiv = $("<div>");
middleDiv.addClass("middle");
$(fancyDiv).append(middleDiv);

var bottomDiv = $("<div>");
bottomDiv.addClass("bottom");
$(fancyDiv).append(bottomDiv);


$(".locations").append(placeDiv)
});


