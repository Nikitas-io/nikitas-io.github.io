const button = new Audio('sfx/button.wav');
button.volume = 0.3;
const typingLetter = new Audio('sfx/typingletter.wav');
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


// Log Entries.
const logEntries = [];
logEntries[1] = "When it all started I had no idea how far deep this goes... At this point, I'm too \
invested to ever look back. Like last year, this summer too, I will not be taking any days off."

// Start the log.
const logButton = document.getElementById('log-button');
logButton.addEventListener('click', function(){
    soundRestart(button);
    // Print out the log entry.
    showText("log-entry-content", logEntries[1], 0, 50);
    // Make the log-entry button dissapear.
    this.style.opacity = 0;
    this.classList.remove('blinker');
    // Remove the button from the DOM, after it fades away.
    setTimeout(function () {
        logButton.style.display = 'none';
    }, 300);
});
