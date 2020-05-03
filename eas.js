const container = document.querySelector('#container');
const btnDiv = document.createElement('div');
container.appendChild(btnDiv);
createDivGrid();
createResetBtn();

function createResetBtn() {
	var resetBtn = document.createElement('button');
	btnDiv.appendChild(resetBtn);
	resetBtn.innerHTML = 'Reset Canvas';
	resetBtn.style.cssText =
		'outline: none; margin-bottom: 15px; margin-top: 15px; padding-left: 36%; padding-right: 30%;';
}

resetBtn.addEventListener('click', () => {
	var squares = document.getElementsByClassName('square');
	let i;
	for (i = 0; i < squares.length; i++) {
		squares[i].style.cssText = 'background-color: transparent;';
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
