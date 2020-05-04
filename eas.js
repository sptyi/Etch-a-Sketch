const container = document.querySelector('#container');
const btnDiv = document.createElement('div');
container.appendChild(btnDiv);
var resetBtn = document.createElement('button');
var gridSize;

createResetBtn();
setGridSize();
createDivGrid(gridSize);

function setGridSize() {
	gridSize = Math.pow(
		prompt(
			'What size grid would you like to use for your canvas? (For instance, entering 16 would give you a 16x16 square canvas.)',
			16
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
	for (i = 0; i < gridSize; i++) {
		const div = document.createElement('div' + i);
		container.appendChild(div);
		div.classList.add('square');
		div.style.cssText =
			'display: inline-block; min-width: 10px; min-height: 10px; max-width: 10px; max-height: 10px; border: 1px solid whitesmoke; margin-right: 5px;';
		div.addEventListener('mouseover', () => {
			div.style.cssText += 'background-color: red;';
		});
	}
}

function createResetBtn() {
	btnDiv.appendChild(resetBtn);
	resetBtn.innerHTML = 'Reset Canvas';
	resetBtn.style.cssText =
		'outline: none; margin-bottom: 15px; margin-top: 15px; padding-left: 33%; padding-right: 33%;';
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
