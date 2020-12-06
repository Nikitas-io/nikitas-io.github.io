const button = new Audio('sfx/tab.wav');
button.volume = 0.4;
// const typingLetter = new Audio('sfx/typing.mp3');
// typingLetter.volume = 0.1;

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


// Start the log.
// const logButton = document.getElementById('log-button');
// logButton.addEventListener('click', function(){
//     soundRestart(button);
//     // Print out the log entry.
//     showText("log-entry-content", logEntries[1], 0, 30);
//     // Make the log-entry button dissapear.
//     this.style.opacity = 0;
//     this.classList.remove('blinker');
//     // Remove the button from the DOM, after it fades away.
//     setTimeout(function () {
//         logButton.style.display = 'none';
//     }, 300);
// });


// Tab Content.

// Get the tab buttons.
const tabButtons = document.querySelector('.tabs-list');
// Get the tab content.
const tabContent = document.querySelectorAll('.tab-content');
// Get the sidebar images.
const sideImages = document.querySelectorAll('.hex');
// Initialize the first image as selected.
sideImages[0].classList.add('blinker');

// Main menu selected effect.
tabButtons.addEventListener('mousedown', function(evt){
    console.log('\n\nClicked a tab');
    
    // console.log(it);
    if(evt.target.nodeName=='LABEL'){
        
        // Loop through the sidebar images.
        for(i = 0; i<sideImages.length; i++){
            // Get the image's title.
            title = sideImages[i].getAttribute('alt');
            
            // Remove the active class from all sidebar images.
            sideImages[i].classList.remove('blinker');
            
            // Check with which image does the selected tab match.
            if(title == evt.target.innerHTML){
                soundRestart(button);
                // Set the blinker class to the selected image.
                sideImages[i].classList.add('blinker');

                for(var j=0; j<tabContent.length; j++){
                    console.log(tabContent[j]);
                    tabContent[j].style.opacity = 0;

                    // Wait half a second for the menu to fade out.
                    setTimeout(function(){
                        for(var j=0; j<tabContent.length; j++){
                            // Fade in main menu. Setting opacity to 1 is enough to fade the menu in.
                            tabContent[j].style.opacity = 1;
                        }
                    }, 230);
                }
            }
        }



    //   evt.target.style.setProperty('--background', '#fbc943');
    //   evt.target.style.setProperty('color', '#372963');
    }
});
