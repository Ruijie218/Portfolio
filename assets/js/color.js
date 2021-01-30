var numSquare = 6;
var colors = [];
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var container = document.querySelector(".container")

init();

function init() {
	setModeBtn();
	clickListener();
	reset();

}

function setModeBtn(){
	for(var i = 0; i<modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy") {
				numSquare = 3;
				container.style.marginTop ="100px";
			}
			else {
				numSquare = 6;
				container.style.marginTop="20px"
			}
			reset();
		})
	}

}

function clickListener() {
	for (var i = 0; i < squares.length; i++) {
		//Add click listener
		squares[i].addEventListener("click",function(){
			//grab color of picked square to compare
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct!";
				resetBtn.textContent="Play again";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!"
			}
		});
	
	} 
}

function reset(){
		//generate all new colors
	colors = generateRandomColors(numSquare);
	//pick new color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	resetBtn.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display ="none";
		}
		
		
	}
	h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click",function(){
// 	numSquare = 3;
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	colors = generateRandomColors(numSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	container.style.marginTop = "100px";
// 	messageDisplay.textContent = "";
// 	h1.style.backgroundColor = "steelblue";
// 	resetBtn.textContent = "New Colors";
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		}
// 		else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click",function(){
// 	numSquare = 6;
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	colors = generateRandomColors(numSquare);
// 	h1.style.backgroundColor = "steelblue";
// 	container.style.marginTop = "20px";
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	resetBtn.textContent = "New Colors";
// 	messageDisplay.textContent = "";
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })

resetBtn.addEventListener("click",function(){
	//generate all new colors
	colors = generateRandomColors(numSquare);
	//pick new color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors
	for (var i = 0; i < squares.length; i++) {
		//Add initial color to square
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";

})

function changeColors(color) {
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
	
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//Make an array
	var arr = []
	//add random colors to arr
	for (var i = 0; i < num; i++) {
		//get random color and push into array
		arr[i] = randomColor();
	}
	//return the array
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb("+red+", "+green+", "+blue+")";
}