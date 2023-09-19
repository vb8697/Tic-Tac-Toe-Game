function resetGameStatus(){

activePlayer=0;
currnetRound=1;
gameOverElement.firstElementChild.innerHTML=
'You won, <span id="active-player-name">PLAYER NAME</span>!'
gameOverElement.style.display='none';
let gameBoardIndex=0;
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
       gameData[i][j]=0;
      const gameBoardItemElement= gameBoardElement.children[gameBoardIndex];
      gameBoardItemElement.textContent='';
      gameBoardItemElement.classList.remove['disabled'];
      gameBoardIndex++;
    }
  }
}
function startNewGame(){
    if(players[0].name ===''||players[1].name ===''){
        alert('Please set custom player names for both player!');
        return;
    }
    resetGameStatus();
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
    
    if (event.target.tagName !== "LI" || gameIsOver) {
		return;
	}
    const selectedField=event.target;

    const selectedColumn=selectedField.dataset.col-1;
    const selectedRow=selectedField.dataset.row-1;
     
     if (gameData[selectedRow][selectedColumn]>0){
        alert('Please select an empty field!');
        return;
     }

     selectedField.textContent = players[activePlayer].symbol;//player [0]
     selectedField.classList.add('disabled');
    
     gameData[selectedRow][selectedColumn]= activePlayer + 1;
    
    const winnerId=checkGameOver();
    
    if(winnerId !==0){
        endGame(winnerId);
    }
    
    currnetRound++;
     switchPlayer();
}
function checkGameOver(){
    // checking of row equality
    for(let i=0;i<3;i++){
    if(gameData[i][0] > 0 && 
        gameData[i][0]===gameData[i][1] && 
        gameData[i][1]===gameData[i][2])
        {
        return  gameData[i][0];
    }}
        // checking of column equality

    for(let i=0;i<3;i++){
    if(gameData[0][i] > 0 && 
        gameData[0][i]===gameData[1][i] && 
        gameData[0][i]===gameData[2][i])
        {
        return  gameData[0][i];
    }}
        // checking diagonal eqiuality top left to bottom

    if(gameData[0][0]>0 && 
        gameData[0][0]===gameData[1][1] &&
        gameData[1][1]===gameData[2][2]){
            return gameData[0][0];
        }
    // checking diagonal eqiuality top bottom to right top

    if(gameData[2][0]>0 && 
            gameData[2][0]===gameData[1][1] &&
            gameData[1][1]===gameData[0][2]){
                return gameData[2][0];
            }
    if(currnetRound === 9){
        return -1;
    }
    return 0; 
}
function endGame(winnerId){
    gameOverElement.style.display='block';
    if(winnerId > 0){
    const winnerName=players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent = winnerName;
   }else{
   gameOverElement.firstElementChild.textContent='It\'s a draw!';
   }
}