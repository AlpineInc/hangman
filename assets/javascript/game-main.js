//TODO:
//only accepts alphabets as valid user guess entry
//Draw image when user wins
//Play music when user wins
//add timer
//add default image
//add default music while playing

//The main game object
var game = {
    activeGameStatus: false,
    gameCount: 0,
    score: 0,
    artistList: [],
    activeArtistIndex: null,
    playerGuessedWord: null,
    playerMaxAlphaGuessCount: null,
    playerGuessedAlphaCount: 0,
    playerGuessedAlphaList: null,
    onLoad: function(artistList, playerMaxAlphaGuessCount) {
        this.stopMusic();
        this.showArtistImage(null);
        this.setPlayerMaxAlphaGuessCount(playerMaxAlphaGuessCount);
        this.setActiveGameStatus(false);
        this.initializeGameCount(0);
        this.initializeScore(0);
        this.drawDisplayBoard("Press any key to start the game...");
        this.drawScore();
        this.initializeArtistList(artistList);
    },
    //Main function that handles a user enter keyboard event
    handleKeyPressEvent: function(keypress) {
        if (this.activeGameStatus === false) {
            this.newGame();
        } else {
            if ((keypress.keyCode >= 65 && keypress.keyCode <= 90) || (keypress.keyCode >= 97 && keypress.keyCode <= 122)) {
                var keyUsedStatus = this.evaluateKeyUsedStatus(keypress.key);
                if (keyUsedStatus) {
                    this.drawDisplayBoard("Alphabet already used. Select a different alphabet...");
                    return;
                }
                this.incrementPlayerGuessedAlphaCount();
                this.drawPlayerGuessAlphaCount();
                this.updatePlayerGuessedAlphaList(keypress.key);
                this.drawPlayerGuessAlphaList();
                var evaluateKeyStatus = this.evaluateKey(keypress.key);
                this.drawGameArea();
                if (this.playerGuessedWord === this.artistList[this.activeArtistIndex].name) {
                    this.setActiveGameStatus(false);
                    this.drawDisplayBoard("Congragulations! You won the game. Press any key to start a new game...");
                    this.incrementScore();
                    this.drawScore();
                    this.showArtistImage();
                    this.playMusic();
                } else {
                    if (this.playerGuessedAlphaCount === this.playerMaxAlphaGuessCount) {
                        this.setActiveGameStatus(false);
                        this.drawDisplayBoard("Game over. You loose. The artist/band name is - " + this.artistList[this.activeArtistIndex].name + ". Press any key to start a new game...");
                    } else if (evaluateKeyStatus === true) {
                        this.drawDisplayBoard("Good guess. Try another alphabet...");
                    } else {
                        this.drawDisplayBoard("Bad guess. Try another alphabet...");
                    }
                }
            } else {
                //Do nothing if key pressed is not an alphabet
                return;
            }
        }
    },
    newGame: function() {
        this.setActiveGameStatus(true);
        this.incrementGameCount();
        this.stopMusic();
        this.showArtistImage(null);
        this.drawDisplayBoard("Enter an alphabet...");
        this.drawScore();
        this.setActiveArtistIndex();
        this.initializePlayerGuessedWord();
        this.drawGameArea();
        this.initializePlayerGuessedAlphaCount();
        this.drawPlayerGuessAlphaCount();
        this.initializePlayerGuessedAlphaList();
        this.drawPlayerGuessAlphaList();
    },
    initializeArtistList: function(artistList) {
        //The below jquery method can be used to load a remote json file accessed over HTTP. For future use when using Heroku    
        /* this.artistList = (function() {
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
        })();*/
        this.artistList = artistList;
    },
    evaluateKey: function(key) {
        var evaluateKeyStatus = false;
        for (i = 0; i < this.artistList[this.activeArtistIndex].name.length; i++) {
            if (key.toLowerCase() === this.artistList[this.activeArtistIndex].name.charAt(i).toLowerCase()) {
                this.playerGuessedWord = this.playerGuessedWord.substr(0, i) + this.artistList[this.activeArtistIndex].name.charAt(i) + this.playerGuessedWord.substr(i + 1);
                evaluateKeyStatus = true;
            }
        }
        return evaluateKeyStatus;
    },
    evaluateKeyUsedStatus: function(key) {
        for (i = 0; i < this.playerGuessedAlphaList.length; i++) {
            if (key.toUpperCase() === this.playerGuessedAlphaList.charAt(i)) {
                return true;
            }
        }
        return false;
    },
    setPlayerMaxAlphaGuessCount: function(playerMaxAlphaGuessCount) {
        this.playerMaxAlphaGuessCount = playerMaxAlphaGuessCount;
    },
    initializePlayerGuessedAlphaCount: function() {
        this.playerGuessedAlphaCount = 0;
    },
    incrementPlayerGuessedAlphaCount: function() {
        this.playerGuessedAlphaCount++;
    },
    drawPlayerGuessAlphaCount: function() {
        document.getElementById("pending-picks-allowed").textContent = "Remaining number of guesses allowed: " + (this.playerMaxAlphaGuessCount - this.playerGuessedAlphaCount);
    },
    initializePlayerGuessedAlphaList: function() {
        this.playerGuessedAlphaList = "";
    },
    updatePlayerGuessedAlphaList: function(key) {
        if (this.playerGuessedAlphaList.length === 0) {
            this.playerGuessedAlphaList = key.toUpperCase();
        } else {
            this.playerGuessedAlphaList = this.playerGuessedAlphaList + ", " + key.toUpperCase();
        }
    },
    drawPlayerGuessAlphaList: function() {
        document.getElementById("picked-list").textContent = "Alphabets already guessed: " + this.playerGuessedAlphaList;
    },
    drawGameArea: function() {
        document.getElementById("game-area").textContent = this.playerGuessedWord;
    },
    initializePlayerGuessedWord: function() {
        this.playerGuessedWord = '';
        for (var i = 0; i < this.artistList[this.activeArtistIndex].name.length; i++) {
            if (this.artistList[this.activeArtistIndex].name.charAt(i) === " ") {
                this.playerGuessedWord = this.playerGuessedWord + " ";
            } else {
                this.playerGuessedWord = this.playerGuessedWord + "X";
            }
        }
    },
    setActiveArtistIndex: function() {
        this.activeArtistIndex = Math.floor(Math.random() * this.artistList.length);
    },
    playMusic: function(artist) {
        document.getElementById("audio-source").src = this.artistList[this.activeArtistIndex].titleMusicUrl;
    },
    stopMusic: function() {
        document.getElementById("audio-source").src = "";
    },
    showArtistImage: function(artist) {
        if (artist === null) {
            document.getElementById("artist-img").src = "assets/images/empty.png";

        } else {
            document.getElementById("artist-img").src = this.artistList[this.activeArtistIndex].image;
        }
    },
    drawDisplayBoard: function(textContent) {
        document.getElementById("display-board").textContent = textContent;
    },
    initializeScore: function(initScore) {
        this.score = initScore;
    },
    incrementScore: function() {
        this.score++;
    },
    drawScore: function() {
        document.getElementById("score-card").textContent = "Score: " + this.score;
    },
    setActiveGameStatus: function(activeStatus) {
        this.activeGameStatus = activeStatus;
    },
    initializeGameCount: function(initGameCount) {
        this.gameCount = initGameCount;
    },
    incrementGameCount: function() {
        this.gameCount++;
    }
};