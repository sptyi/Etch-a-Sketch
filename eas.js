document.getElementsByTagName('body')[0].setAttribute('id', 'body');
const body = document.querySelector('#body');
const btnDiv = document.createElement('div');
body.insertBefore(btnDiv, body.childNodes[1]);
const resetBtn = document.createElement('button');
const container = document.querySelector('#container');
var gridSize;

createResetBtn();
setGridSize();
createDivGrid(gridSize);

function createResetBtn() {
	btnDiv.appendChild(resetBtn);
	resetBtn.innerHTML = 'Reset Canvas';
	resetBtn.style.cssText =
		'outline: none; margin-bottom: 15px; margin-top: 15px;';
}

resetBtn.addEventListener('click', () => {
	var squares = document.getElementsByClassName('square');
	let i;
	for (i = 0; i < squares.length; i++) {
		squares[i].style.cssText += 'background-color: transparent;';
	}
	setGridSize();
	createDivGrid(gridSize);
});

function setGridSize() {
	gridSize = Math.pow(
		prompt(
			'What size grid would you like to use for your canvas? \n (For instance, entering 16 would give you a 16x16 square canvas.)'
		),
		2
	);
	if (gridSize == '') {
		gridSize = 256;
	} else if (gridSize) {
		return;
	} else {
		gridSize = 256;
	}
}

function createDivGrid(gridSize) {
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
	for (i = 0; i < gridSize; i++) {
		const div = document.createElement('div' + i);
		container.appendChild(div);
		div.classList.add('square');
		div.style.cssText =
			'flex-grow: 500px; max-width: 500px; min-width: 7px; max-height: 500px; min-height: 7px; border: 1px solid whitesmoke;';
		div.addEventListener('mouseover', () => {
			div.style.cssText += 'background-color: red;';
		});
	}
}
