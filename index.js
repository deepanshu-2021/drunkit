for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", listener);
  document.addEventListener("keypress", press);
  function listener() {
    var Buttoninnerhtml = this.innerHTML;
    used(Buttoninnerhtml);
    switch (Buttoninnerhtml) {
      case "w":
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
        break;
      case "a":
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play();
        break;
      case "s":
        var sound = new Audio("sounds/tom-3.mp3");
        sound.play();
        break;
      case "d":
        var sound = new Audio("sounds/tom-4.mp3");
        sound.play();
        break;
      case "j":
        var sound = new Audio("sounds/snare.mp3");
        sound.play();
        break;
      case "k":
        var sound = new Audio("sounds/crash.mp3");
        sound.play();
        break;
      case "l":
        var sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
        break;
    }
  }
}
function press(event) {
  used(event.key);
  switch (event.key) {
    case "w":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
  }
}
function used(key) {
  document.querySelector("." + key).classList.toggle("shadow");
  setTimeout(function () {
    document.querySelector("." + key).classList.toggle("shadow");
  }, 100);
}
