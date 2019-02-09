//variables
var words= [ "bonjovi", "nirvana","gunsroses","aerosmith","queen","metallica"]

//empty variables to store values later
var randomWord=" ";
var lettersOfWord=[]
var blanks= 0;
var blanksAndCorrect = [];
var wrongGuess= [];

//Counter Variables
var wins= 0;
var losses= 0;
var guessesRemaining= 9;

//All functions

function Game(){
//game start function

//computer generates random word from word array
randomWord = words[Math.floor(Math.random()*words.length)];

//split the individual word into separate arrays, and store in new array
lettersOfWord = randomWord.split ("");

//store length of word in blanks, for later use
blanks = lettersOfWord.length;

//creating a loop to generate "_" for each letter in array stored in blanks
for (var i=0; i<blanks; i++) {blanksAndCorrect.push("_"); }

//showing the "_" within HTML
document.getElementById("currentword").innerHTML = ""+ blanksAndCorrect.join("");


//console logging
console.log(randomWord);
console.log(lettersOfWord)
console.log(blanks)
console.log(blanksAndCorrect)
}


//Audio Function

var bonjovi = document.getElementById("LivinOnAPrayer.mp3");
var nirvana=  document.getElementById("SmellsLike.mp3");
var guns=  document.getElementById("NovemberRain.mp3");
var aerosmith=  document.getElementById("DreamOn.mp3");
var queen=  document.getElementById("Iwanttobreakfree.mp3");
var metallica=  document.getElementById("EnterSandman.mp3");


function aud() {

    //bonjovi audio &image
if (randomWord === words[0]){
nirvana.pause();
guns.pause();
aerosmith.pause();
queen.pause();
metallica.pause();
bonjovi.play();
document.getElementById ("image").src= "./assets/images/bonjovi.jpg";
document.getElementById ("audio").src= "./assets/images/LivingOnAPrayer.mp3";}


    //nirvana audio &image
else if (randomWord === words[1]){
guns.pause();
aerosmith.pause();
queen.pause();
metallica.pause();
bonjovi.pause()
nirvana.play();
document.getElementById ("image").src= "./assets/images/nirvana.jpg";
document.getElementById ("audio").src= "./assets/images/SmellsLike.mp3";
}

 //gunsroses audio & image

else if (randomWord === words[2]){
aerosmith.pause();
queen.pause();
metallica.pause();
bonjovi.pause()
nirvana.pause();
guns.play();
document.getElementById ("image").src= "./assets/images/gunsroses.png";
document.getElementById ("audio").src= "./assets/images/NovemberRain.mp3";

}

// aerosmith
else if (randomWord === words[3]){
    queen.pause();
    metallica.pause();
    bonjovi.pause()
    nirvana.pause();
    guns.pause();
    aerosmith.play();
    document.getElementById ("image").src= "./assets/images/aerosmith.jpg ";
    document.getElementById ("audio").src= "./assets/images/DreamOn.mp3";}

// queen
else if (randomWord === words[4]){
    metallica.pause();
    bonjovi.pause()
    nirvana.pause();
    guns.pause();
    aerosmith.pause();
    queen.play();
    document.getElementById ("image").src= "./assets/images/queen.jpg ";
    document.getElementById ("audio").src= "./assets/images/Iwanttobreakfree.mp3";}


// metallica
else if (randomWord === words[5]){
    bonjovi.pause()
    nirvana.pause();
    guns.pause();
    aerosmith.pause();
    queen.pause();
    metallica.play();
    document.getElementById ("image").src="./assets/images/metallica.jpg";
    document.getElementById ("audio").src= "./assets/images/EnterSandman.mp3";}


};

//reset function

function reset(){
 guessesRemaining = 9;
 wrongGuess = [];
 blanksAndCorrect = [];
 Game ()
}

//check letters/ compare function

//If/Else, to see if letter selected matches random word
function checkLetters (letter) {
    var letterInWord= false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i=0; i<blanks; i++){
        if (randomWord[i]== letter) {
            letterInWord = true
        }
    }
   //if letterinWord (false)
    if (letterInWord){
        //check each letter to see if it matches word
        for (var i=0; i<blanks; i++) {
        if (randomWord[i] == letter) {
        blanksAndCorrect[i] = letter;}
    }
}
    else { wrongGuess.push(letter);
    guessesRemaining--;}
    console.log(blanksAndCorrect);
}

//final function

function complete() {
    console.log("wins:"+wins+"|losses:"+ losses+ "|guesses left:"+ guessesRemaining)

    //if won..

if (lettersOfWord.toString() == blanksAndCorrect.toString())
{wins++;
    aud()
    reset()
    //display wins on screen
    document.getElementById("winstracker").innerHTML=" "+wins;

    //if lost
}  else if (guessesRemaining===0){
    losses++;
    reset()
    document.getElementById("losstracker").innerHTML = " " + losses;

}
document.getElementById("currentword").innerHTML=" "+blanksAndCorrect.join(" ");
document.getElementById("guessesremaining").innerHTML=" "+guessesRemaining;


}

//Game()

//check for keyup, and convert to lowercase then store in guesses
document.onkeyup = function (event) {
    var guesses = String.fromCharCode(event.keyCode).toLowerCase();
    //check to see if guess entered matches value of random word
    checkLetters(guesses);
    //process wins/loss 
    complete();
    //store player guess in console for reference 
    console.log(guesses);

    //display/store incorrect letters on screen
    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
}