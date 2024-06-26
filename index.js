var buttonsNum = document.querySelectorAll(".drum");

for (var i = 0; i < buttonsNum.length; i++){
    buttonsNum[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        buttonAnimation(buttonInnerHTML); 
        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;

            case "k":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            default:
                break;
        }
    });

};
function keyDown (){
    document.addEventListener("keydown",function(event){
        buttonAnimation(event.key);
        switch (event.key) {
            case "w":
                var tom1 = new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
            
            case "a":
                var tom2 = new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
                var tom3 = new Audio("./sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("./sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var kick = new Audio("./sounds/kick-bass.mp3");
                kick.play();
                break;

            case "k":
                var crash = new Audio("./sounds/crash.mp3");
                crash.play();
                break;

            case "l":
                var snare = new Audio("./sounds/snare.mp3");
                snare.play();
                break;
            default:
                break;
        }
    })
}
keyDown();


function buttonAnimation(currentKey){
    var thisCSSClass = "."+currentKey;
    var activeButton = document.querySelector(thisCSSClass);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}




