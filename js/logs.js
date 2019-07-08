//Show logs.
var showText = function (target, message, index, interval) {
    console.log('Happens');
    if (index < message.length) {
        document.getElementById(target).innerHTML += message[index++];
       // soundRestart("typing");
        setTimeout(function () {
            showText(target, message, index, interval);
        }, interval);
    }
}



showText("logs", "Do you want to load state?", 0, 50);
