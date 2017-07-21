var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplayPicked = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    setupModeBtns();
    //setup the Squares event listeners
    setupSquares();
    reset();
}

function setupModeBtns() {
    for(var i=0; i<modeBtns.length; i++){
        modeBtns[i].addEventListener("click", function() {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
            reset();
        });
    }
}

function setupSquares() {
    for(var i=0; i<squares.length; i++){
        //add click event listeners to squares
        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare the color with pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?";
                changeSquareColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}

function reset() {
    colors = generateRandomColors(numOfSquares);
    //pick a new color
    pickedColor = pickColorSquare();
    resetButton.textContent = "New Colors";
    colorDisplayPicked.textContent = pickedColor;
    //hide the other three colors
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeSquareColors(color) {
    //loop through all squares
    for(var i=0; i<squares.length; i++){
        //change the color of square
        squares[i].style.backgroundColor = color;
    }
}

function pickColorSquare() {
    var colorIndex = Math.floor(Math.random() * colors.length);
    return colors[colorIndex];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for(var i=0; i<num ; i++){
        //get random color and push it to arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick red from 0 - 255
    var red = Math.floor(Math.random() * 256);;
    //pick green from 0 - 255
    var green = Math.floor(Math.random() * 256);
    //pick blue from 0 - 255
    var blue = Math.floor(Math.random() * 256);
    return "rgb(" + red + ", " + green + ", " + blue +")";
}
