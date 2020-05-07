document.getElementsByTagName("body")[0].setAttribute("id", "body");
const body = document.querySelector("#body");
const btnDiv = document.createElement("div");
body.insertBefore(btnDiv, body.childNodes[1]);
const resetBtn = document.createElement("button");
const container = document.querySelector("#container");
var gridSize;
var squareSize;
var squaresPerSide;

createResetBtn();

function createResetBtn() {
	btnDiv.appendChild(resetBtn);
	resetBtn.innerHTML = "Reset Canvas";
	resetBtn.style.cssText =
		"outline: none; margin-bottom: 50px; margin-top: 25px; padding: 5px; border-radius: 7px";
	setGridSize();
	createDivGrid(gridSize);
	resetBtn.addEventListener("click", () => {
		setGridSize();
		createDivGrid(gridSize);
	});
}

function setGridSize() {
	squaresPerSide = prompt(
		"What size grid would you like to use for your canvas? \n (For instance, entering 16 would give you a 16x16 square canvas.)"
	);
	console.log(squaresPerSide);
	if (squaresPerSide == "") {
		squaresPerSide = 16;
		gridSize = Math.pow(squaresPerSide, 2);
		console.log(gridSize);
	} else if (squaresPerSide) {
		gridSize = Math.pow(squaresPerSide, 2);
		console.log(gridSize);
		return;
	} else {
		squaresPerSide = 16;
		gridSize = Math.pow(squaresPerSide, 2);
		console.log(gridSize);
	}
}

function createDivGrid(gridSize) {
	while (container.firstChild) {
		container.removeChild(container.lastChild);
	}
	for (i = 0; i < gridSize; i++) {
		const div = document.createElement("div");
		container.appendChild(div);
		div.classList.add("square");
		div.addEventListener("mouseover", () => {
			div.style.cssText += "background-color: whitesmoke;";
		});
		setGridProperties(squareSize);
	}
}

function setGridProperties(squareSize) {
	container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
	squareSize = 500 / squaresPerSide;
	console.log(squareSize);
	var squareClass = document.querySelectorAll(".square");
	squareClass.forEach((element) => {
		element.style.minWidth += squareSize + "px";
		element.style.minHeight += squareSize + "px";
		element.style.maxWidth += "500px";
		element.style.maxHeight += "500px";
	});
}
