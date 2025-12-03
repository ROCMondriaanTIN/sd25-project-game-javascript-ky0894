window.onload=start;

function start(){
    bindButtons();
    
    setSelectedWord()

   showWord(getSelectedWord(), correctLetters)
    showHangMan(0);
    showMessage('klik op een letter om te beginnen');
}

