let liste = [
  "Omi",
  "Papi",
  "Mami",
  "Maman",
  "Fred",
  "Vick",
  "Laura",
  "Marwan",
  "Gwen",
  "Clement",
  "Papa",
  "Flo",
  "Constance",
  "Clarisse",
  "Eug",
  "Marcoune",
  "Mouf",
  "Thibault",
  "Laura",
  "Pauline",
  "Marie",
  "Julien",
  "Anissa",
  "Loic",
  "Sabine",
  "Antoine",
  "Pierre",
  "Tim",
  "Pif",
  "Elise",
  "Baptiste",
  "Clem",
  "Julien",
  "Dan",
  "Mandy",
  "Leo",
  "Maxime",
  "Alex",
  "Tanya",
  "Pascale",
  "Sophie",
  "Juan",
  "Alexandra",
  "Ashley",
  "Lucie",
  "Mathilde",
  "Ben",
  "Camilo",
  "Mark"
];
addNames();
$("#add-person").on("click", function(event) {
  event.preventDefault();
  liste = [];
  var newperson = $("#person-input")
    .val()
    .trim();
  liste.push(newperson);

  addNames();
});
function addNames() {
  Object.defineProperty(Array.prototype, "chunk", {
    value: function(chunkSize) {
      var that = this;
      return Array(Math.ceil(that.length / chunkSize))
        .fill()
        .map(function(_, i) {
          return that.slice(i * chunkSize, i * chunkSize + chunkSize);
        });
    }
  });

  // Split in 3 groups
  let result = liste.chunk(liste.length / 3);

  let firstArr = result[0];
  let secondArr = result[1];
  let thirdArr = result[2];
  console.log(result);

  console.log(firstArr);
  firstArr.forEach(function(elem) {
    let prenom = $("<h4>");
    prenom.text(elem);
    $(".firstcol").append(prenom);
  });

  secondArr.forEach(function(elem) {
    let prenom = $("<h4>");
    prenom.text(elem);
    $(".seccol").append(prenom);
  });
  thirdArr.forEach(function(elem) {
    let prenom = $("<h4>");
    prenom.text(elem);
    $(".thirdcol").append(prenom);
  });
}

$("#totalListe").text("TOTAL GUESTS: " + liste.length);
