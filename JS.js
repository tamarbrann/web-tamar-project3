const buttons = document.querySelectorAll(".animal");

//adding event listener to the keyboard press
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// window.addEventListener("click", function () {
//   const jungleAudio = new Audio("sounds/junglesound.wav");
//   jungleAudio.volume = 0.4;
//   jungleAudio.play();
// });

for (const button of buttons) {
  button.addEventListener("click", function () {
    makeSound(button.innerText);
  });
}

function buttonAnimation(currentKey) {
  for (const button of buttons) {
    if (button.innerText === currentKey) {
      button.classList.add("pressed"); //will add a class of "pressed" to the pressed button
      setTimeout(function () {
        button.classList.remove("pressed");
      }, 150); //after a delay of 100ms we'll remove the class
    }
  }
}

let currentAudio;

function makeSound(key) {
  // Pause the currently playing audio
  // Here I used two methods that were not taught in class -
  // one is sound import and the other is speechSynthesis, which instead of importing sound,
  // reads text that is written to it.
  if (currentAudio) {
    currentAudio.pause();
  }
  switch (key) {
    case "c":
      currentAudio = new Audio("sounds/catsound.wav");
      break;
    case "w":
      currentAudio = new Audio("sounds/cowsound.wav");
      break;
    case "g":
      speechSynthesis.speak(
        new SpeechSynthesisUtterance("what a giraffe sounds like")
      );
      return;
    case "h":
      currentAudio = new Audio("sounds/horsesound.wav");
      break;
    case "l":
      currentAudio = new Audio("sounds/Lion.mp3");
      break;
    case "d":
      speechSynthesis.speak(
        new SpeechSynthesisUtterance("I am Lucy and I am cute")
      );
      return;
    case "s":
      currentAudio = new Audio("sounds/sheepsound.wav");
      break;
    default:
      alert("No key type!");
      return;
  }

  currentAudio.play();
}
