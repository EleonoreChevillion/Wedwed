let guests = [
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

  var newperson = $("#person-input")
    .val()
    .trim();
  guests.push(newperson);
  document.getElementById("person-input").value = "";
  $(".col").empty();
  addNames();
});

function addNames() {
  for (let i = 0; i < guests.length; i++) {
    let prenom = $("<h4>");
    prenom.attr("id", guests[i]);
    prenom.attr("data-index", i);
    prenom.text(guests[i]);
    let total = guests.length;
    if (i < total / 3) {
      $("#col1").append(prenom);
    } else if (total / 3 < i && i < (total * 2) / 3) {
      $("#col2").append(prenom);
    } else {
      $("#col3").append(prenom);
    }

    $("#" + guests[i]).click(function() {
      var itemIndex = this.getAttribute("data-index");
      guests.splice(itemIndex, 1);
      $(".col").empty();
      addNames();
    });
  }

  $("#totalguests").text("TOTAL GUESTS: " + guests.length);
  console.log(guests);
}
