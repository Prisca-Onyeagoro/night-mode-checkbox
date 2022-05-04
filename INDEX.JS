function nightmode() {
  var white = document.querySelector("h3");

  //for the backgroundColor
  document.querySelector("body").style.backgroundColor = "black";

  //for the list
  var list = document.getElementsByTagName("li");
  for (var i = 0; i < list.length; i++) {
    list[i].style.color = "white";
  }

  white.style.color = "white";
}
