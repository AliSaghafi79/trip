//  for tab page
function openTab(evt, tabName) {
  var i, tabContentPage, tabLinksPage;
  tabContentPage = document.getElementsByClassName("tabContentPage");
  for (i = 0; i < tabContentPage.length; i++) {
    tabContentPage[i].style.display = "none";
  }
  tabLinksPage = document.getElementsByClassName("tabLinksPage");
  for (i = 0; i < tabLinksPage.length; i++) {
    tabLinksPage[i].className = tabLinksPage[i].className.replace(" tab", "");
  }
  let tabNames = document.getElementsByClassName(tabName);
  for (i = 0; i < tabNames.length; i++) {
    tabNames[i].style.display = "block";
  }

  evt.currentTarget.className += " tab";
}
document.getElementById("defaultTab").click();

// for menu
let toggle = document.getElementById("toggle");
let items = document.getElementsByClassName("items");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    toggle.classList.toggle("show");
  });
}

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
for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.children[1].style.display === "none"
      ? ((this.children[1].style.display = "block"),
        (this.children[0].children[1].style.transform = "rotate(180deg)"))
      : ((this.children[1].style.display = "none"),
        (this.children[0].children[1].style.transform = "rotate(0deg)"));
  });
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function () {
  scrollFunction();
};

navbar = document.getElementsByClassName("navbar");
function scrollFunction() {
  for (var i = 0; i < navbar.length; i++) {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navbar[i].style.display = "none";
    } else {
      navbar[i].style.display = "block";
    }
  }
}

// for sidebar

let sidebarIcon = document.getElementById("sidebarIcon");
let sidebar = document.getElementById("sidebar");
let close = document.getElementById("close");

sidebarIcon.addEventListener("click", function () {
  if (sidebar.style.width === "100%") {
    sidebar.style.width = "0%";
  } else {
    sidebar.style.width = "100%";
    document.body.scroll = "no";
    document.body.style.overflow = "hidden";
    document.height = window.innerHeight;
  }
});

close.addEventListener("click", function () {
  if (sidebar.style.width === "0%") {
    sidebar.style.width = "100%";
  } else {
    sidebar.style.width = "0%";
    document.body.style.overflow = "auto";
  }
});
