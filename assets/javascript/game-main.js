var game = {
    activeGameStatus: false,
    gameCount: 0,
    score: 0,
    artistList: [],
    activeArtistIndex: null,
    onLoad: function() {
        this.stopMusic();
        this.showArtistImage(null);
        this.setActiveGameStatus(false);
        this.initializeGameCount(0);
        this.initializeScore(0);
        this.drawScore();
        this.initializeArtistList("./assets/json/easy-artist.json");
    },

    handleKeyPressEvent: function(keypress) {
        if (this.activeGameStatus === false) {
            this.newGame();
        } else {

        }
    },
    newGame: function() {
        this.setActiveGameStatus();
        this.incrementGameCount();
        this.stopMusic();
        this.showArtistImage(null);
        this.drawScore();
        this.setActiveArtistIndex();
        this.drawGameArea();
    },
    setActiveArtistIndex: function() {

    },
    playMusic: function(artist) {

    },
    stopMusic: function() {

    },
    showArtistImage: function(artist) {

    },
    drawDisplayBoard: function(textContent) {

    },
    initializeScore: function(initScore) {
        this.score = initScore;
    },
    incrementScore: function() {
        this.score++;
    },
    drawScore: function() {

    },
    setActiveGameStatus: function(activeStatus) {
        this.activeGameStatus = activeStatus;
    },
    initializeGameCount: function(initGameCount) {
        this.gameCount = initGameCount;
    },
    incrementGameCount: function() {
        this.gameCount++;
    },
    incrementScore: function() {
        this.score++;
    },
    initializeArtistList: function(artistListJson) {
        this.artistList = (function() {
            var json = null;
            $.ajax({
                'async': false,
                'global': false,
                'url': artistListJson,
                'dataType': "json",
                'success': function(data) {
                    json = data;
                }
            });
            return json;
        })();
        console.log(this.artistList);
    }


};

console.log("entered game-main.js")
game.onLoad();



//on load
//dont play music
//dont show image
//initialize activegamestatus to false and refresh diaplayboard with game instructions
//initialize score to 0 and refresh display
//initialize game count to 0
//initialize artist list array

//on key press

//if activegamestatus = false not started
//set activegamestatus to true
//increment game count by 1
//stop the song
//remove the artist image
//refresh score display
//pick a new artist
//get length of the artist
//display dashes
//initialize guess count to zero and display
//initialize guessed alphabet array to null and display
//update displayboard asking user to pick alphabet

//if activegamestatus = true
//if not alphabet
//update displayboard with error and go back to event listner
//if alphabet
//check if the alpha is already in the guessed alpha list.
//if yes, 
//update displayboard with error and go back to event listner
//if no, 
//increment guess count by 1 and refresh display
//add the alpha to the guessed alpha error and refresh display
//check if the alpha is part of the artist name
//if yes,
//update dash list
//check if game complete
//if yes,
//update score and refresh display
//update image display
//play song
//update displayboard saying user won
//set activegamestatus to false
//if no,
//update displayboard saying alpha matched
//go back to event listner
//if no,
//update displayboard with warning that selected alpha is not in the list
//go back to event listner