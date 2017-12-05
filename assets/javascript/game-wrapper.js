//JSON object containing all the list of music artists. This list can be editied to add more artists.
var easyArtistList = [{
    "name": "Whitney Houston",
    "image": "assets/images/whitney-houston.png",
    "title": "I Will Always Love You",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
},
{
    "name": "Pink Floyd",
    "image": "assets/images/pink-floyd.png",
    "title": "",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
},
{
    "name": "Celine Dion",
    "image": "assets/images/celine-dion.png",
    "title": "",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
},
{
    "name": "Mariah Carey",
    "image": "assets/images/mariah-carey.png",
    "title": "",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
},
{
    "name": "Led Zeppelin",
    "image": "assets/images/led-zeppelin.png",
    "title": "",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
},
{
    "name": "Elton John",
    "image": "assets/images/elton-john.png",
    "title": "",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
},
{
    "name": "Madonna",
    "image": "assets/images/madonna.png",
    "title": "",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
},
{
    "name": "Michael Jackson",
    "image": "assets/images/michael-jackson.png",
    "title": "",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
},
{
    "name": "Elvis Presley",
    "image": "assets/images/elvis-presley.png",
    "title": "",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
},
{
    "name": "The Beatles",
    "image": "assets/images/the-beatles.png",
    "title": "",
    "titleMusicUrl": "https://www.youtube.com/watch?v=A_MjCqQoLLA&list=PL9-cZf_sidpnrpRDlmAiLJaFtzHpD7aFY"
}];

//Number of allowed guesses per game
var maxPlayerGuessCount = 12;

//Load the game
game.onLoad(easyArtistList, maxPlayerGuessCount);

//Pass key press events to the game
document.onkeyup = function(event){
	game.handleKeyPressEvent(event);
} 
