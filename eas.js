const container = document.querySelector('#container');
const btnDiv = document.createElement('div');
var resetBtn = document.createElement('button');
container.appendChild(btnDiv);
window.onload = function () {
	createDivGrid();
	createResetBtn();
};

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
	var gridSize = prompt(
		'What size grid would you like to use for your canvas?'
	);
	if ((gridSize = null)) {
		gridSize = 256;
	}
});

function createDivGrid() {
	for (i = 0; i < 256; i++) {
		const div = document.createElement('div' + i);
		container.appendChild(div);
		div.classList.add('square');
		div.style.cssText =
			'display: inline-block; width: 10px; height: 10px; border: 1px solid whitesmoke; margin-right: 5px;';
		div.addEventListener('mouseover', () => {
			div.style.cssText += 'background-color: red;';
		});
	}
}
