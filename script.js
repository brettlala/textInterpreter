const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const textInput = document.getElementById('text');
const speed = document.querySelector('.speed')
let play = true;

playBtn.addEventListener('click', sayHi);


function sayHi() {
    let utterance =  new SpeechSynthesisUtterance;
        let sayThis = textInput.value;
        utterance.rate = speed.value;
        utterance.text = sayThis;
    
    if(sayThis.length < 1) {
        alert('put something')
    }
   
    if(!window.speechSynthesis.speaking) {
        window.speechSynthesis.speak(utterance);
    }
     else if(window.speechSynthesis.speaking) {
        return;
    }


    pauseBtn.addEventListener('click', () => {
        play = !play;
        
        if(play == false) {
            window.speechSynthesis.pause(utterance);
        } else if(play == true) {
            window.speechSynthesis.resume(utterance);
        }
    })

    stopBtn.addEventListener('click', () => {
        window.speechSynthesis.cancel(utterance);
})
}