


function playNote(stringNum) {
    let audioSrc = "";
    const audio = new Audio(audioSrc);
    switch (stringNum) { 
        case 6: 
            audio.src = "./assets/lowE.mp3";
            break;
        case 5:
            audio.src = "./assets/aStr.mp3";
            break;
        case 4:
            audio.src = "./assets/dStr.mp3";
            break;    
        case 3:
            audio.src = "./assets/gStr.mp3";
            break;
        case 2:
            audio.src = "./assets/bStr.mp3";
            break;
        case 1:
            audio.src = "./assets/eStr.mp3";
            break;
        default:
            audio.src = "./assets/lowE.mp3";
            break;
        
    }
    audio.play();
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


// Traffic Count
const request = new Request("https://server.sgambapps.com/?site=earTuner", {
    method: "POST",
});
fetch(request)
.then(res => {
    if (res.ok) {
    console.log("visit counted");
    }
})
.catch(err => console.log(err));