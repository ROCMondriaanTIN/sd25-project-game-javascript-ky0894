const buttons = document.querySelectorAll(".letters button");
const hangmanCanvas = document.querySelector('.hangman');
const ctx = hangmanCanvas.getContext('2d');
const wordContainer = document.querySelector('.word-display');
const message = document.querySelector('.message');

function bindButtons() {
    for (let b = 0;b<buttons.length;b++)
    {
        buttons[b].addEventListener('click', handleLetterClick);
    }
}
function showWord(SelectedWord, correctLetters){
    console.log(SelectedWord);
    let display ='';

    for(let i=0; i< SelectedWord.length; i++){
        if(correctLetters.includes(SelectedWord[i])){
            display=display+SelectedWord[i];
        }else{
            display=display+"_";
        }
    }
    wordContainer.innerHTML=display;
}

function showMessage(m){
    message.innerHTML = m;
}