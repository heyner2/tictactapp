// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//html elements
const statusDiv = document.querySelector('.status');
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game-cell');

//game constants
const xSymbol = '✘';
const oSymbol = '○';

//game variables
let gameIsLive = true;
let xIsNext = true;
let oIsNext = false;
let winner = null;

if (xIsNext) {
    statusDiv.innerHTML = `Player using ${xSymbol} is next!!`;
    statusDiv.style.color = "white";
}

const letterToSymbol = (letter) => letter === 'x' ? xSymbol : oSymbol;

const handleWin = (letter) => {
    gameIsLive = false;
    winner = letter;
    if (winner === 'x') {
        statusDiv.innerHTML = `Congratulations ${letterToSymbol(letter)} has won!!`;
        statusDiv.style.color = "red";
    } else {
        statusDiv.innerHTML = `Congratulations ${letterToSymbol(letter)} has won!!`;
        statusDiv.style.color = "red";
    }
};

//function
const checkGameStatus = () => {
    const topLeft = cellDivs[0].classList[1];
    const topMiddle = cellDivs[1].classList[1];
    const topRight = cellDivs[2].classList[1];
    const middleLeft = cellDivs[3].classList[1];
    const middleMiddle = cellDivs[4].classList[1];
    const middleRight = cellDivs[5].classList[1];
    const bottomLeft = cellDivs[6].classList[1];
    const bottomMiddle = cellDivs[7].classList[1];
    const BottomRight = cellDivs[8].classList[1];

    //top
    if (topLeft && topLeft === topMiddle && topLeft === topRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add('Won');
        cellDivs[1].classList.add('Won');
        cellDivs[2].classList.add('Won');
        console.log(cellDivs[2].classList);
       //middle
    } else if (middleRight && middleRight === middleMiddle && middleRight === middleLeft) {
        handleWin(middleRight);
        cellDivs[3].classList.add('Won');
        cellDivs[4].classList.add('Won');
        cellDivs[5].classList.add('Won');
        //bottm
    } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === BottomRight) {
        handleWin(bottomLeft);
        cellDivs[6].classList.add('Won');
        cellDivs[7].classList.add('Won');
        cellDivs[8].classList.add('Won');
        //left to right
    } else if (topLeft && topLeft === middleMiddle && topLeft === BottomRight) {
        handleWin(topLeft);
        cellDivs[0].classList.add('Won');
        cellDivs[4].classList.add('Won');
        cellDivs[8].classList.add('Won');
        //right to left 
    } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
        handleWin(topRight);
        cellDivs[2].classList.add('Won');
        cellDivs[4].classList.add('Won');
        cellDivs[6].classList.add('Won');
        //top to bottom right
    } else if (topRight && topRight === middleRight && topRight === BottomRight) {
        handleWin(topMiddle)
        cellDivs[0].classList.add('Won');
        cellDivs[3].classList.add('Won');
        cellDivs[6].classList.add('Won');
        //top middle to bottom
    } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        handleWin(topRight)
        cellDivs[1].classList.add('Won');
        cellDivs[4].classList.add('Won');
        cellDivs[7].classList.add('Won');
        //top right to bottom
    } else if (topRight && topRight === middleRight && topRight === BottomRight) {
        handleWin(topRight)
        cellDivs[2].classList.add('Won');
        cellDivs[5].classList.add('Won');
        cellDivs[8].classList.add('Won');
        //tie
    } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && BottomRight) {
        gameIsLive = false;
        statusDiv.innerHTML = `It seems as  we have a tied!!`;
        statusDiv.style.color = "red";
        cellDivs[0].classList.add('Tied');
        cellDivs[1].classList.add('Tied');
        cellDivs[2].classList.add('Tied');
        cellDivs[3].classList.add('Tied');
        cellDivs[4].classList.add('Tied');
        cellDivs[5].classList.add('Tied');
        cellDivs[6].classList.add('Tied');
        cellDivs[7].classList.add('Tied');
        cellDivs[8].classList.add('Tied');
    } else {
        if (xIsNext) {
            statusDiv.innerHTML = `Player using ${xSymbol} is next!!`;
            statusDiv.style.color = "white";
        } else {
            statusDiv.innerHTML = `Player using ${oSymbol} is next!!`;
            statusDiv.style.color = "white";
        }
    }
}

//eventHandlers
const handleReset = (e) => {
    xIsNext = true;
    statusDiv.innerHTML = `Player using ${xSymbol} is next!!`;
    statusDiv.style.color = "white";
    winner = null; 
    for(const cellDiv of cellDivs) {
        cellDiv.classList.remove('x');
        cellDiv.classList.remove('o');
        cellDiv.classList.remove('Won');
    }
}

const handleCellClick = (e) => {
    

    if (!gameIsLive || e.target.classList[1] === 'x' || e.target.classList[1] === 'o') {
        return; 
    }

    if (xIsNext) {
        e.target.classList.add('x');
        xIsNext = !xIsNext;
        checkGameStatus();
    } else {
        e.target.classList.add('o');
        xIsNext = !xIsNext;
        checkGameStatus();
    }

    
 
}

//event listeners
resetDiv.addEventListener('click', handleReset);

for (const cellDiv of cellDivs) {
    cellDiv.addEventListener('click', handleCellClick);
}
