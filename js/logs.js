const button = new Audio('sfx/button.wav');
button.volume = 0.1;
const typingLetter = new Audio('sfx/typing.mp3');
typingLetter.volume = 0.1;

//Play the sound.
var soundFlag = true;
// SFX player.
function soundRestart(audio) {
    if (soundFlag) {
        if (audio.paused) {
            audio.play();
        } else {
            audio.currentTime = 0;
        }
    }
}


//Show logs.
var showText = function (target, message, index, interval) {
    if (index < message.length) {
        soundRestart(typingLetter);
        document.getElementById(target).innerHTML += message[index++];
       // soundRestart("typing");
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    }
}

// Get the current year.
let year = new Date().getFullYear();
// Add the current year to the footer of the page.
const currentYear = document.getElementById('current-year');
currentYear.innerHTML = year;

// Log Entries.
const logEntries = [];
logEntries[1] = "Welcome to my portfolio page. My full name is Nikitas I/O Chatzipazarlis and I am a " + 
    "Software Engineer / Project Manager. To find out more about me personally, please press one of" + 
    " the animated buttons or one of the social media icons. To find out more about my work, scroll" +
    " further down for a list of my featured projects.";

// Start the log.
const logButton = document.getElementById('log-button');
logButton.addEventListener('click', function(){
    soundRestart(button);
    // Print out the log entry.
    showText("log-entry-content", logEntries[1], 0, 30);
    // Make the log-entry button dissapear.
    this.style.opacity = 0;
    this.classList.remove('blinker');
    // Remove the button from the DOM, after it fades away.
    setTimeout(function () {
        logButton.style.display = 'none';
    }, 300);
});
