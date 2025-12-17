function handleLetterClick(){
    console.log(event.target.innerHTML.toLowerCase())
}

function handleLetterClick(event){
let isLetterInword = isLetterInSelectWord((event.target.innerHTML.toLowerCase()));

if(isLetterInword){
    showMessage('juiste letter');
    if(isWinner()){
        console.log('winner');
        showMessage('je hebt gewonnen, klik op een letter voor nieuw spel');
    }
    else{
        showMessage('helaas, verkeerde letter');
        showMessage(getNumberofWrongCharacters());
        if(isLoser()){
            console.log('loser');
            showMessage('je hebt verloren, klik op een letter voor nieuw spel.' +getSelectedWord());
        }
    }
}
}

