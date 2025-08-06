

let toLoop = false;
let lastAudio = null;

function playNote(stringNum) {
    let audioSrc = "";
    if (lastAudio !== null) {
        lastAudio.pause();
    }
    const audio = new Audio(audioSrc);
    lastAudio = audio;
    switch (stringNum) { 
        case 6: 
            audio.src = "./assets/lowEshort.mp3";
            break;
        case 5:
            audio.src = "./assets/aStrshort.mp3";
            break;
        case 4:
            audio.src = "./assets/dStrshort.mp3";
            break;    
        case 3:
            audio.src = "./assets/gStrshort.mp3";
            break;
        case 2:
            audio.src = "./assets/bStrshort.mp3";
            break;
        case 1:
            audio.src = "./assets/eStrshort.mp3";
            break;
        default:
            audio.src = "./assets/lowEshort.mp3";
            break;
        
    }
    audio.play();
    audio.loop = toLoop;
}


function toggleLoop() {
    const loopBtn = document.getElementById("loopToggle");
    if (!toLoop) {
        if (lastAudio !== null) {
            lastAudio.loop = true;
        }
        toLoop = true;
        loopBtn.style.backgroundColor = "green";
    } else {
        if (lastAudio !== null) {
            lastAudio.pause();
        }
        toLoop = false;
        loopBtn.style.backgroundColor = "white";
    }
}

function playExtraNote(fp) {
    const audio = new Audio(fp);
    audio.play();
}

function toggleHideExtraNotes() {
    const noteDiv = document.getElementById("extraNotes");
    noteDiv.children.array.forEach(element => {
        element.hidden = !element.hidden;
        
    });
}
// Change to not fetch each load
const today = new Date();
const day = today.getDay();
const lastVisit = localStorage.getItem("lastVisit");
const toFetch = lastVisit !== day.toString();
// Traffic Count
const request = new Request("https://server.sgambapps.com/?site=earTuner", {
    method: "POST",
});
if (toFetch) {
    fetch(request)
    .then(res => {
        if (res.ok) {
        console.log("visit counted");
        }
    })
    .catch(err => console.log(err));

    localStorage.setItem("lastVisit", day.toString());
}