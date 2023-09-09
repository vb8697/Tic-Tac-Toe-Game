function startNewGame(){
    if(players[0].name ===''||players[1].name ===''){
        alert('Please set custom player names for both player!');
        return;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = 'block';
 
}
function switchPlayer(){
    if(activePlayer===0){
        activePlayer=1;
    }else{
    activePlayer=0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}
function selectGameField(event){

    const selectedField=event.target;

     event.target.textContent=players[activePlayer].symbol;//player [0]
     event.target.classList.add('disabled');
     const selectedColumn=selectedField.dataset.col-1;
     const selectedRow=selectedField.dataset.row-1;
     gameData[selectedRow][selectedColumn]=activePlayer+1;
     console.log(gameData);

     switchPlayer();
}