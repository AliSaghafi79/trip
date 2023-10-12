// for hotel
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// for Qa
let accordion = document.getElementsByClassName("accordion");
let dropdown = document.getElementsByClassName("dropdown");
console.log(accordion);
for (var i = 0; i < accordion.length; i++) {
  console.log(accordion[i].children);
  accordion[i].addEventListener("click", function () {
    this.children[1].style.display === "none"
      ? ((this.children[1].style.display = "block"),
        (this.children[0].children[1].style.transform = "rotate(180deg)"))
      : ((this.children[1].style.display = "none"),
        (this.children[0].children[1].style.transform = "rotate(0deg)"));
  });
}
