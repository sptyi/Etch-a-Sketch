const h1 = document.createElement('h1');
h1.textContent = '- Etch-a-Sketch -';
h1.style.cssText =
	'font-size: 45px; margin-top: 25px; text-shadow: 2px 2px 5px #000';
document.getElementsByTagName('body')[0].setAttribute('id', 'body');
const body = document.querySelector('#body');
body.insertBefore(h1, body.childNodes[0]);
const btnDiv = document.createElement('div');
body.insertBefore(btnDiv, body.childNodes[1]);
const container = document.createElement('div');
body.insertBefore(container, body.childNodes[2]);
const resetBtn = document.createElement('button');
btnDiv.appendChild(resetBtn);
const loading = document.createElement('div');
body.insertBefore(loading, body.childNodes[3]);
document.getElementsByTagName('div')[2].setAttribute('id', 'loading');
const footer = document.createElement('footer');
footer.innerHTML = 'created by <a href="https://github.com/sptyi">sptyi</a>';
footer.style.cssText =
	'display: inline-block; margin-top: 25px; font-size: 20px';
body.appendChild(footer);
var gridSize;
var squareSize;
var squaresPerSide;

createResetBtn();

function createResetBtn() {
	resetBtn.textContent = 'Reset Canvas';
	resetBtn.style.cssText =
		'outline: none; margin-bottom: 25px; margin-top: 50px; padding: 7px; border-radius: 7px; box-shadow: 2px 2px 5px #000;';
	squaresPerSide = 16;
	gridSize = 256;
	createDivGrid(gridSize);
	setLoadingProperties();
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
	container.style.boxShadow = '2px 2px 5px #000';
	container.style.placeItems = 'start';
	container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
}

function setLoadingProperties() {
	loading.style.display = 'none';
	loading.style.position = 'absolute';
	loading.style.left = '50%';
	loading.style.top = '485px';
	loading.style.margin = '-75px 0 0 -75px';
	loading.style.border = '10px solid #444';
	loading.style.borderRadius = '50%';
	loading.style.borderTop = '10px solid #00a';
	loading.style.width = '125px';
	loading.style.height = '125px';
	loading.style.animation = 'spin 1.5s ease infinite';
}
