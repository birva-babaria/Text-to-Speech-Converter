const actionBtn = document.getElementById("action");

let isSpeaking = true;

let textToSpeech = () => {
    const content = document.getElementById("content").value;
    const synth = window.speechSynthesis;
    if(!synth.speaking && content){
        const utterance = new SpeechSynthesisUtterance(content);
        synth.speak(utterance);
    }

    if(synth.speaking && isSpeaking){
        actionBtn.innerText = "Pause";
        synth.resume();
        isSpeaking = false;
    }
    else{
        actionBtn.innerText = "Resume";
        synth.pause();
        isSpeaking = true;
    }

    setInterval(() => {
        if(!synth.speaking && !isSpeaking){
            actionBtn.innerText = "Convert to Speech";
            isSpeaking = true;
        };
    }, 2);
}

actionBtn.addEventListener("click", textToSpeech);