let playerSwitch = false;
let log = document.getElementById('game-log-text');
let log2 = document.getElementById('game-log-text-2');
let winnerLog = document.getElementById('winner-log');
let playerId = document.getElementById('player');
const welcomeScreen = document.getElementById('welcome');
const gamelog = document.getElementById('gamelog');
const restart = document.getElementById('r-btn');
 
const ticTacToe = {
  gameboard: document.querySelector('.gameboard'),
  tiles : Array.from(document.querySelectorAll('.tile')),
  gameOn: true,
 
  turnGameOn : function(){
    ticTacToe.gameOn = true;
  },
 
  turnGameOff : function(){
    ticTacToe.gameOn = false;
  },
 
 checkDraw: function(){
  let tSpace = ticTacToe.tiles;
  return tSpace.every(tile => {
    return tile.value !== undefined;
  })
 },
 
  checkWin: function(){
    let tSpace = ticTacToe.tiles;
    let iOne = [0,3,6,0,1,2,6,0];
    let iTwo = [1,4,7,3,4,5,4,4];
    let iThree = [2,5,8,6,7,8,2,8];
    var i = 0;
    let con = undefined;
   
    for( i; i < iOne.length; i++){
      if(tSpace[iOne[i]].value == "X" && tSpace[iTwo[i]].value == "X" && (tSpace[iThree[i]].value == "X")){
        con = true;
       return con, winnerLog.innerHTML = "Player X won", log.innerHTML = 'Click to Restart';
 
 
    }
   
    else if(tSpace[iOne[i]].value == "O" && tSpace[iTwo[i]].value == "O" && tSpace[iThree[i]].value == "O"){
      con = true
      return con, winnerLog.innerHTML = "Player O won", log.innerHTML = 'Click to Restart';
    }
     else if(con == undefined && ticTacToe.checkDraw()){
      con = true
      return con, winnerLog.innerHTML = "Its a Draw" , log.innerHTML = 'Click to Restart';
     }
  }},
 
  play: function(){
    ticTacToe.gameboard.addEventListener('click', e => {
      let tile = e.target.closest('.tile');
      let tileLocation = ticTacToe.tiles.indexOf(e.target)+1;
   
    if(playerSwitch == false &&  tile.value == undefined){
      if(ticTacToe.gameOn){
      tile.innerHTML = "X"
      tile.value = "X";
      playerId.style.color = "red";
      playerId.innerHTML = "O";
      playerSwitch = true;
      if(ticTacToe.checkWin()){
        restart.classList.remove('is-hidden');
        return ticTacToe.turnGameOff()
      }
      return playerSwitch, log.innerHTML= 'Player X played at tile ' + tileLocation + '\n';
    }}
 
    else if(playerSwitch == true &&  tile.value == undefined){
      if(ticTacToe.gameOn == true){
      tile.style.color = 'red';
      tile.innerHTML = "O"
      tile.value = "O";
      playerId.style.color = "seagreen";
      playerId.innerHTML = "X";
      playerSwitch = false;
      if(ticTacToe.checkWin()){
        restart.classList.remove('is-hidden');
        return ticTacToe.turnGameOff()
      }
      return playerSwitch ,log.innerHTML= 'Player O played at tile', tileLocation + '\n';
    }}
   
    else{
      if(!ticTacToe.checkWin()){
     return log.innerHTML=( 'Player '+  tile.value + ' played here already');
      }
    }
  }
  )}
}
 
function turnOn(){
  if(ticTacToe.gameOn == true){
  welcomeScreen.classList.add('is-hidden');
  gamelog.classList.remove('is-hidden');
  ticTacToe.play();
  }
}
function reload(){
  window.reload();
}