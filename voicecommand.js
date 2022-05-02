let speechRecognition = new webkitSpeechRecognition();

function Transform(st){
    let words = ["tanay","love",'fuck',"you","okay","ok","mom","lol","yay","tesla"]    
    
    // SpeechRecognition
    speechRecognition.continuous = true;
    speechRecognition.interimResults = true;
    speechRecognition.start();  
    speechRecognition.onstart = function(){
        indicator[0].color = "Green" }
    speechRecognition.onend = function(){
        indicator[0].color = "Red" }

    speechRecognition.onresult = (event) => {
      let interim_transcript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        interim_transcript += event.results[i][0].transcript;
        console.log(interim_transcript.trim().toLowerCase())
        
        // If Speech has one of the words in our array
        if(words.includes(interim_transcript.trim().toLowerCase())){
            noiseSeed(millis() * 100)
            console.log("Changed")
            speechRecognition.stop(); 
        }
        else{
            console.log("Trying")
            }
        }
    }
}


function Indicator(flame){
    this.color = flame
    this.show = function(){
        push()
        fill(this.color)
        noStroke()
        ellipse(windowWidth-50, windowHeight-50,5,5)
        pop()
    }
}