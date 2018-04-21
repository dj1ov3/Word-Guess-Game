//create an array of words
var daws = ["Ableton", "Gband", "Logic", "Reason"];
//Choose word randomly
var wordNum = Math.floor(Math.random()*daws.length);
var activeWord = daws[wordNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];

var docUnder = document.getElementById("underscore");
//testing
console.log(activeWord);


//Create underscores based on length of word
var generateUnder = () => {
    for(var i = 0; i < activeWord.length; i++){
        underScore.push("_");
    }
    return underScore;
}

console.log(generateUnder());



//Get users guess
// *document.onkeyup
    // document.onkeyup = function(){
    document.addEventListener("keypress", (event) =>{
    var keyword = String.fromCharCode(event.keyCode);
    //if users guess is right
    if(activeWord.indexOf(keyword) > -1){
        rightWord.push(keyword);
        underScore[activeWord.indexOf(keyword)] = keyword;
        console.log(underScore);
        if(underScore.join("") == activeWord){
             alert("You Win");
             }
    
    }
    else(wrongWord.push(keyword));

   
    

   
});






