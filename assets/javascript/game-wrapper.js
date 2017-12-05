//JSON object containing all the list of music artists. This list can be editied to add more artists.
var easyArtistList = [{
    "name": "Whitney Houston",
    "image": "assets/images/whitney-houston.png",
    "title": "I Will Always Love You",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
},
{
    "name": "Pink Floyd",
    "image": "assets/images/pink-floyd.png",
    "title": "",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
},
{
    "name": "Celine Dion",
    "image": "assets/images/celine-dion.png",
    "title": "",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
},
{
    "name": "Mariah Carey",
    "image": "assets/images/mariah-carey.png",
    "title": "",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
},
{
    "name": "Led Zeppelin",
    "image": "assets/images/led-zeppelin.png",
    "title": "",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
},
{
    "name": "Elton John",
    "image": "assets/images/elton-john.png",
    "title": "",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
},
{
    "name": "Madonna",
    "image": "assets/images/madonna.png",
    "title": "",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
},
{
    "name": "Michael Jackson",
    "image": "assets/images/michael-jackson.png",
    "title": "",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
},
{
    "name": "Elvis Presley",
    "image": "assets/images/elvis-presley.png",
    "title": "",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
},
{
    "name": "The Beatles",
    "image": "assets/images/the-beatles.png",
    "title": "",
    "titleMusicUrl": "assets/media/captainplanet24.mp3"
}];

//Number of allowed guesses per game
var maxPlayerGuessCount = 12;

//Load the game
game.onLoad(easyArtistList, maxPlayerGuessCount);

//Pass key press events to the game
document.onkeyup = function(event){
	game.handleKeyPressEvent(event);
} 


document.getElementById("a-reset").onclick = function(){
	game.newGame();
}