let more = document.getElementById("more");
let moreText = document.getElementById("more-text");
more.addEventListener("click", function () {
  if (moreText.style.display === "block") {
    moreText.style.display = "-webkit-box";
    more.innerHTML = "بیشتر بخوانید";
  } else {
    moreText.style.display = "block";
    more.innerHTML = "بستن";
  }
});
