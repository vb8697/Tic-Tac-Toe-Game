let editedPlayer = 0;
const players=[
    {
        name:'',
        symbol:'X',
    },
    {
        name:'',
        symbol:'0',

    },
];
const confOverlayElement=document.getElementById('config-overlay');
const backdropElement=document.getElementById('backdrop');
const formElement=document.querySelector('form');
const errorsOutputElement=document.getElementById('config-errors');

const editPlayer1BtnElement=document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement=document.getElementById('edit-player-2-btn');
const cancelConfBtnElement=document.getElementById('cancel-conf-btn');
const startNewGameBtnElement=document.getElementById('start-game-btn');

editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

cancelConfBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);