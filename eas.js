document.getElementsByTagName('body')[0].setAttribute('id', 'body');
const body = document.querySelector('#body');
const btnDiv = document.createElement('div');
body.insertBefore(btnDiv, body.childNodes[1]);
const resetBtn = document.createElement('button');
const container = document.querySelector('#container');
const loading = document.querySelector('.loading');
var gridSize;
var squareSize;
var squaresPerSide;

createResetBtn();

function createResetBtn() {
	btnDiv.appendChild(resetBtn);
	resetBtn.innerHTML = 'Reset Canvas';
	resetBtn.style.cssText =
		'outline: none; margin-bottom: 50px; margin-top: 25px; padding: 5px; border-radius: 7px';
	squaresPerSide = 16;
	gridSize = 256;
	createDivGrid(gridSize);
	resetBtn.addEventListener('click', () => {
		setGridSize();
		createDivGrid(gridSize);
		hideLoading();
	});
}

function setGridSize() {
	squaresPerSide = prompt(
		'What size grid would you like to use for your canvas? \n (For instance, entering 16 would give you a 16x16 square canvas.)'
	);
	console.log(squaresPerSide);
	if (squaresPerSide > 500) {
		alert(
			'The canvas grid size cannot exceed 500. \n Please enter a number less than 501.'
		);
		setGridSize();
	} else if (squaresPerSide == '') {
		squaresPerSide = 16;
		gridSize = Math.pow(squaresPerSide, 2);
		console.log(gridSize);
		createLoading();
	} else if (squaresPerSide) {
		gridSize = Math.pow(squaresPerSide, 2);
		console.log(gridSize);
		createLoading();
	} else {
		squaresPerSide = 16;
		gridSize = Math.pow(squaresPerSide, 2);
		console.log(gridSize);
		createLoading();
	}
}

function createDivGrid(gridSize) {
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
	return new Promise((resolve) => {
		setTimeout(() => {
			for (i = 0; i < gridSize; i++) {
				const div = document.createElement('div');
				container.appendChild(div);
				div.classList.add('square');
				div.addEventListener('mouseover', () => {
					div.style.cssText += 'background-color: black;';
				});
				setGridProperties(squareSize);
			}
			resolve('loaded');
		}, 1000);
	});
}

async function hideLoading() {
	const loaded = await createDivGrid();
	loading.style.display = 'none';
}

function createLoading() {
	loading.style.display = 'block';
}

function setGridProperties(squareSize) {
	squareSize = 500 / squaresPerSide;
	console.log(squareSize);
	setContainerProperties();
	var squareClass = document.querySelectorAll('.square');
	squareClass.forEach((element) => {
		element.style.minWidth += squareSize + 'px';
		element.style.minHeight += squareSize + 'px';
		element.style.maxWidth += '500px';
		element.style.maxHeight += '500px';
		element.style.backgroundColor += '#777';
	});
}

function setContainerProperties() {
	container.style.width = '500px';
	container.style.height = '500px';
	container.style.display = 'grid';
	container.style.border = '50px solid #A00';
	container.style.borderRadius = '20px';
	container.style.placeItems = 'start';
	container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
}
