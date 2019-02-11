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
    var audio = document.getElementById("gameAudio");
    // audio.setAttribute("src",);
    // audio.play()
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
Game();
//Audio Function



var images = {
    bonjovi:"assets/images/bonjovi.jpg",
    nirvana:"assets/images/nirvana.jpg"  ,  
    gunsroses: "assets/images/gunsroses.jpg",
    aerosmith: "assets/images/aerosmith.jpg",
    queen: "assets/images/queen.jpg ",
    metallica: "assets/images/metallica.jpg"
}

var songs = {
    bonjovi :"assets/images/LivinOnAPrayer.mp3",
    nirvana:  "assets/images/SmellsLike.mp3",
    gunsroses: "assets/images/NovemberRain.mp3",
    aerosmith: "assets/images/DreamOn.mp3",
    queen: "assets/images/Youdontfoolme.mp3",
    metallica: "assets/images/EnterSandman.mp3"
}
function aud() {

    //this one is the short one
//alphabet finished
//image objects
document.getElementById ("image").src= images[randomWord];
document.getElementById ("gameAudio").src= songs[randomWord];
document.getElementById ("gameAudio").play();
}

function enableMute() { gameAudio.muted = true;
  } 
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
if (lettersOfWord.toString() === blanksAndCorrect.toString()) {
    wins++;
    aud()
    setTimeout(reset, 3000);
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
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","x","v","y","z","enter","space"];
    if (alphabet.includes(guesses)) {

        //check to see if guess entered matches value of random word
        checkLetters(guesses);
        //process wins/loss 
        complete();
        //store player guess in console for reference 
        console.log(guesses);
        
        //display/store incorrect letters on screen
        document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
    }
}