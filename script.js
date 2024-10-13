const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const cover = document.getElementById("cover");
const song = document.getElementById("audio");
const play = document.getElementById("play");

const douma = {
    songName : "7 Cores de Morte | Douma",
    artist : "Enygma",
    file : "douma"
};

const doffy = {
    songName : "Doflamingo (One Piece) - Por Um Fio",
    artist : "M4rkim",
    file : "doffy"
};

const hayloft = {
    songName : "Hayloft II",
    artist : "Mother Mother",
    file : "hayloft"
};

const sexDrugs = {
    songName : "Sex, Drugs, Etc.",
    artist : "Beach Weather",
    file : "sexdrugs"
};

const sufjan = {
    songName : "Fourth of July",
    artist : "Sufjan Stevens",
    file : "sufjan"
};


let isPlaying = false;
const playlist = [douma, doffy, hayloft, sexDrugs, sufjan];
let index = 0;



function playSong() {
    play.querySelector('.bi').classList.remove('bi-play-circle-fill');
    play.querySelector('.bi').classList.add('bi-pause-circle-fill');
    song.play();
    isPlaying = true;
}

function pauseSong() {
    play.querySelector('.bi').classList.add('bi-play-circle-fill');
    play.querySelector('.bi').classList.remove('bi-pause-circle-fill');
    song.pause();
    isPlaying = false;
}

function playPauseDecider() {
    if(isPlaying === true){
        pauseSong();
    } else {
        playSong();
    }
}

function initializeSong(){
    cover.src = 
    song
    songName
    bandName
}


play.addEventListener("click", playPauseDecider);