const words =['rood','wit','zwart'];
let SelectedWord;
let correctLetters =[];
let wrongLetters=[];
let gameActive;

function setSelectedWord(){
    SelectedWord = words[Math.floor(Math.random() * words.length)];
}

function getSelectedWord(){
    return SelectedWord;
}

function showHangMan(errors)
{
    ctx.clearRect(0, 0 , hangmanCanvas.width , hangmanCanvas.height);
    if(errors > 0){
        //base
        ctx.fillRect(10, 180 , 100 , 10);
        //pole
        ctx.fillRect(50, 10 , 10 , 170);
        //top beam
        ctx.fillRect(50, 10 , 80 , 10);
        //rope
        ctx.fillRect(120, 10 , 10 , 30);
    }
    if(errors > 1){
        ctx.beginPath();
        ctx.arc(125, 50, 20 ,0 , Math.PI * 2)
        ctx.stroke();
    }
    if(errors > 2){
        ctx.fillRect(120, 70 ,10 ,50);
    }
    if(errors > 3){
        ctx.moveTo(125, 80);
        ctx.lineTo(100, 100);
        ctx.stroke();
    }
        if(errors > 4){
        ctx.moveTo(125, 80);
        ctx.lineTo(150, 100);
        ctx.stroke();
    }
        if(errors > 5){
        ctx.moveTo(130, 120);
        ctx.lineTo(150, 150);
        ctx.stroke();
    }
        if(errors > 6){
        ctx.moveTo(120, 120);
        ctx.lineTo(100, 150);
        ctx.stroke();
    }

}

function isLetterInSelectWord(letter){
    console.log(letter);
    if(correctLetters.indexOf(letter) === -1 && wrongLetters.indexOf(letter)=== -1){
        if(SelectedWord.indexOf(letter) === -1){
            wrongLetters.push(letter);
            return false;
        }else{
            correctLetters.push(letter);
            showWord(setSelectedWord, correctLetters);
            return true;
        
        }
    }
    return false;
}