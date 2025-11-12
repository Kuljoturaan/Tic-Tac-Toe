console.log("Javascript from Tic Tac Toe")

let turn = "x" //x, o
let xResponseArray = []
let oResponseArray = []
let playerTurnLabel = document.getElementById("playerTurnLabel")

var winArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
var win = 0
var xScore = document.getElementById("xScore")
var xScoreCount = 0
var oScore = document.getElementById("oScore")
var oScoreCount = 0
var drawScore = document.getElementById("drawScore")
var trophyContainer = document.getElementById("trophy-container")
var trophy = document.getElementById("trophy")
var drawScoreCount = 0

function boardClicked(id) {
    console.log(id + " boardClicked")
    updateBoardLabel("boardLabel" + id, id)
}
function manageTurn() {
    if (turn === "x") {
        turn = "o"
        playerTurnLabel.textContent = "O"

    } else if (turn === "o") {
        turn = "x"
        playerTurnLabel.textContent = "X"

    }
}
function updateBoardLabel(labelId, id) {
    if (turn === "x") {
        console.log("xResponseArray.includes(id): ", xResponseArray.includes(id))
        if (!xResponseArray.includes(id) && !oResponseArray.includes(id)) {
            document.getElementById(labelId).textContent = "X"
            manageTurn()
            xResponseArray.push(id)
            if (xResponseArray.length > 2) {
                if (winCheck(xResponseArray)) {
                    xScore.textContent = ++xScoreCount
                    win = 1
                    console.log("X won")
                    showTrophy()
                }
            }
        }

    }
    else if (turn === "o") {
        if (!xResponseArray.includes(id) && !oResponseArray.includes(id)) {
            document.getElementById(labelId).textContent = "O"
            manageTurn()
            oResponseArray.push(id)
            if (xResponseArray.length > 2) {
                if (winCheck(oResponseArray)) {
                    oScore.textContent = ++oScoreCount
                    win = 1
                    console.log("O won")
                    showTrophy()
                }
            }
        }
    }
    if (xResponseArray.length + oResponseArray.length >= 9 && win === 0) {
        drawScore.textContent = ++drawScoreCount
        console.log("Draw!!!!")
    }
    console.log("xResponseArray: ", xResponseArray)
    console.log("oResponseArray: ", oResponseArray)
}

function newGame() {
    for (let count = 1; count < 10; count++) {
        document.getElementById("boardLabel" + count).textContent = ""

    }
    xResponseArray = []
    oResponseArray = []
    turn = "x"
    playerTurnLabel.textContent = "X"
    win = 0
    hideTrophy()

}
function resetGame() {
    newGame()
    oScoreCount = 0
    xScoreCount = 0
    drawScoreCount = 0
    xScore.textContent = xScoreCount
    oScore.textContent = oScoreCount
    drawScore.textContent = drawScoreCount
}

function winCheck(responseArray) {
    return winArray.some(winCombo =>
        winCombo.every(num => responseArray.includes(num))
    );
}
function showTrophy() {
    startConfetti()
    trophyContainer.style.display = "flex"
    trophy.style.opacity = 1

}
function hideTrophy() {
    stopConfetti()
    trophyContainer.style.display = "none"
    trophy.style.opacity = 0
}
var confettiIntervalID = 0
function startConfetti() {
    confetti({
        particleCount: 500,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#0047ab', '00bfff', '#ff0000', '#00ff00']
    })
    confettiIntervalID = setInterval(() => {
        confetti({
            particleCount: 500,
            spread: 100,
            origin: { y: 0.6 },
            colors: ['#0047ab', '00bfff', '#ff0000', '#00ff00']
        })
        }, 4000);
}

function stopConfetti () {
    console.log("stopConfetti is called")
    clearInterval(confettiIntervalID)
    confettiIntervalID = null
}