const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// ANTES DE COMEÇAR O JOGO
pipe.style.animation = 'none';
pipe.style.left = `-80px`;

mario.style.animation = 'none';

// START GAME

function play() {

	// inciando pipe
	pipe.style.animation = '';
	pipe.style.left = '';

	// iniciando mario
	mario.style.animation = '';
	mario.src = 'images/mario.gif'
	mario.style.width = '150px';
	mario.style.position = 'absolute';
	mario.style.bottom = '0';
	mario.style.marginLeft = '0px';

	const jump = () => {
		mario.classList.add('jump');

		setTimeout(() => {
			mario.classList.remove('jump');
		}, 500);
	}

	const loop = setInterval(() => {

		const pipePosition = pipe.offsetLeft;
		const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

		if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

			pipe.style.animation = 'none';
			pipe.style.left = `${pipePosition}px`;

			mario.style.animation = 'none';
			mario.style.bottom = `${marioPosition}px`;

			mario.src = 'images/game-over.png';
			mario.style.width = '75px';
			mario.style.marginLeft = '50px';

			clearInterval(loop);

		}

	},10);

	document.addEventListener('keydown', jump);
}

