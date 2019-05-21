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
// function addNames() {
//   Object.defineProperty(Array.prototype, "chunk", {
//     value: function(chunkSize) {
//       var that = this;
//       return Array(Math.ceil(that.length / chunkSize))
//         .fill()
//         .map(function(_, i) {
//           return that.slice(i * chunkSize, i * chunkSize + chunkSize);
//         });
//     }
//   });

//   // Split in 3 groups
//   let result = guests.chunk(guests.length / 3);

//   let firstArr = result[0];
//   let secondArr = result[1];
//   let thirdArr = result[2];
//   console.log(result);

//   console.log(firstArr);
function addNames() {
  //   guests.forEach(function(x) {
  //     let prenom = $("<h4>");
  //     prenom.text(x);
  //     prenom.addClass("col-md-4");
  //     $(".col").append(prenom);
  //   });

  for (let i = 0; i < guests.length; i++) {
    let prenom = $("<h4>");
    prenom.text(guests[i]);
    if (i < 20) {
      $("#col1").append(prenom);
    } else if (20 < i < 40) {
      $("#col2").append(prenom);
    } else {
      $("#col3").append(prenom);
    }
  }

  $("#totalguests").text("TOTAL GUESTS: " + guests.length);
  console.log(guests);
}
