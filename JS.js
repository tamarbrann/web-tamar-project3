//creating all buttons array
var buttons=document.querySelectorAll(".animal");


//Playing jungle music when the website loads
window.addEventListener("load", function(){
    var jungleAudio=new Audio("./sounds/african-rhythm.mp3");

//adding event listener to the mouse click
for (var i=0;i<buttons.length;i++){
    //void function that take the innerHTML of the button[i] and sends it to the makeSound function
    buttons[i].addEventListener("click", function(){ 
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    }
    )}

//adding event listener to the keyboard press
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

/*the function recieves a key as an input. based on the key (mouse click or keypress) 
the relevant audio is being played*/
var currentAudio; 


//adding event listener to the keyboard press
function makeSound(key) {

    // Pause the currently playing audio
    // Here I used two methods that were not taught in class - 
    // one is sound import and the other is speechSynthesis, which instead of importing sound, 
    // reads text that is written to it.
    if (currentAudio) {
        currentAudio.pause();
    }
    switch (key) {
        case 'c':
            currentAudio = new Audio("sounds\catsound.wav");
            break;
        case 'w':
            currentAudio = new Audio("sounds\cowsound.wav");
            break;
        case 'g':
            speechSynthesis.speak(new SpeechSynthesisUtterance('what a giraffe sounds like'));
            break;
        case 'h':
            currentAudio = new Audio("sounds\horsesound.wav");
            break;
        case 'l':
            currentAudio = new Audio("sounds\Lion.mp3");
            break;
        case 'd':
            speechSynthesis.speak(new SpeechSynthesisUtterance('I am Lucy and I am cute'))
            break;
        case 's':
            currentAudio = new Audio("sounds\sheepsound.wav");
            break;
        default:
            alert("No key type!");
            return; // exit the function if the key is not recognized
    }

    // Play the new audio
    currentAudio.play();
}
