const player     = document.getElementById('player')
const enemigo    = document.getElementsByClassName('enemigo')
const leftButton = document.getElementById('left')
const rightButton= document.getElementById('right')
const game       = document.getElementById('game')
const pointsCount= document.getElementById('points')
const startGame  = document.getElementById('startGame')
const mainMenu   = document.querySelector('.mainMenu')
const gameOverScreen = document.querySelector('.ctn-over')
let   playerPos  = 40
let   enemiesTop = -40
let   i          = 0 //cantidad de enemigos
let   gameOver   = false


//////////////DIFICULTAD///////////////
let   speed       = 1500
let   points      = 0

function speedYpoints(x = pointsCount){
    if (gameOver==true) return; 
    speed = speed-100; 
    points = points+i; 
    x.lastElementChild.innerHTML = `${points}`}

/////////MOVER///IZQUIERDA////JUGADOR//////
function moveLeft(){
    if (playerPos <= 0 || gameOver==true) return;
	  let l = player.style.left;
    playerPos = playerPos -10;
    player.style.left = `${playerPos}%`;
	  player.style.animationName = 'rotateLeft';}

left.addEventListener('mousedown', moveLeft);

/////////MOVER///DERECHA////JUGADOR//////
function moveRight(){
    if (playerPos >= 75 || gameOver==true) return;
    playerPos = playerPos +10;
    player.style.left = `${playerPos}%`;
	player.style.animationName = 'rotateRight';}

right.addEventListener('click', moveRight);

////////////////////SPAWN/////DE////ENEMIGOS////////////////////////
function spawn(){
    if (gameOver==true) return
    i++
    let spawnEnemies = `<div class ='enemigo enemigo${i}'></div>`
    game.insertAdjacentHTML('beforeend', spawnEnemies)
    enemiesLeft  = Math.random()*90
    document.querySelector(`.enemigo${i}`).style.left = `${enemiesLeft}%`
    document.querySelector(`.enemigo${i}`).style.top = `${enemiesTop}`
}

//////////////COLISIONES///////////FIN///DE///PARTIDA////////////////

function detectColisions(){
	const playerRect  = player.getBoundingClientRect();
	for (enemy of enemigo){
		const enemyRect = enemy.getBoundingClientRect();
		if (playerRect.left   < enemyRect.right  && 
				playerRect.right  > enemyRect.left   && 
				playerRect.top    < enemyRect.bottom && 
				playerRect.bottom > enemyRect.top)
		    {
			   	game.style.setProperty('--bg-before','url(img/fondoPause.png)')
			   	gameOver = true;
					gameOverScreen.style.display = 'flex';
	      };
    };
};

/////////FUNCTION PRINCIPAL//////INICIAR///JUEGO//////////////////

function main(){
	  game.style.setProperty('--bg-before','url(img/fondo.gif')
    mainMenu.style.display = 'none';
    setInterval(speedYpoints, 2000)
    setInterval(spawn, speed)
    setInterval(detectColisions, 5)
}
startGame.addEventListener('click', main);





