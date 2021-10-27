const button = new Audio('sfx/tab.wav');
button.volume = 0.4;
const scrollSpy = new Audio('sfx/scroll.wav');
scrollSpy.volume = 0.6;

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

function tabAnimation(target){
    // Loop through the sidebar images.
    for(i = 0; i<sideImages.length; i++){
        // Remove the active class from all sidebar images.
        sideImages[i].classList.remove('blinker');
        // Check with which image does the selected tab match.
        if(sideImages[i].getAttribute('alt') == target.innerHTML){
            // Set the blinker class to the selected image.
            sideImages[i].classList.add('blinker');
            // Play a sound effect.
            soundRestart(button);
            // Loop through all of the tabs.
            for(var j=0; j<tabContent.length; j++){
                // Fade out the tab content.
                tabContent[j].style.opacity = 0;
            }

            // Wait half a second for the menu to fade out.
            setTimeout(function(){
                for(var j=0; j<tabButtons.children.length; j++){
                    tabLabel = tabButtons.children[j].querySelector('label');
                    // console.log('a tab',tabLabel)
                    if(target.innerHTML == tabLabel.innerHTML){
                        // Fade in main menu. Setting opacity to 1 is enough to fade the menu in.
                        tabContent[j].style.opacity = 1;
                    }
                }
            }, 130);
        }
    }
}

// Select a tab.
tabButtons.addEventListener('click', function(evt){
    // Check if a tab label was clicked.
    if(evt.target.nodeName=='LABEL'){
        // Perform the tab's content animation.
        tabAnimation(evt.target);
    }
});


// Get the sidebar image container.
imageContainer = document.getElementById('image-container');
// Select a sidebar image to select a tab.
imageContainer.addEventListener('click', function(evt){
    // Check if a tab label was clicked.
    if(evt.target.nodeName=='IMG'){
        // Loop through the tab buttons.
        for(i = 0; i<tabButtons.children.length; i++){

            let label = tabButtons.children[i].querySelector('label');
            // Check with which tab does the selected image match.
            if(label.innerHTML == evt.target.getAttribute('alt')){
                
                // Select the corresponding tab.
                label.click();
                // Perform the tab's content animation.
                tabAnimation(label);
            }
        }
    }
});



/* Log out Nikitas */

const retype = document.querySelector("#intro");
const word = document.querySelector("h1 span");

// reset the transition by...
retype.addEventListener("click", function (e) {
		e.preventDefault;

		// -> removing the class
		word.classList.remove("animating");

		// -> triggering reflow /* The actual magic */
		void word.offsetWidth;

		// -> and re-adding the class
		word.classList.add("animating");
	},
	false
);
