console.log("Javascript from Tic Tac Toe")

let turn = "x" //x, o
let xResponseArray = []
let oResponseArray = []
let playerTurnLabel = document.getElementById("playerTurnLabel")

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
        }

    }
    else if (turn === "o") {
        if (!xResponseArray.includes(id) && !oResponseArray.includes(id)) {
            document.getElementById(labelId).textContent = "O"
            manageTurn()
            oResponseArray.push(id)
        }
    }
    console.log("xResponseArray: ", xResponseArray)
    console.log("oResponseArray: ", oResponseArray)
}

function newGame() {
    for (let count = 1; count < 10; count++) {
        document.getElementById("boardLabel" +count).textContent = ""

    }
    xResponseArray = []
    oResponseArray = []
    turn = "x"
    playerTurnLabel.textContent = "X"

}
function resetGame() {
    console.log("Reset button click")
    for (let count = 1; count < 10; count++) {
        document.getElementById("boardLabel" +count).textContent = ""

    }
    xResponseArray = []
    oResponseArray = []
    turn = "x"
    playerTurnLabel.textContent = "X"
    console.log("Game Reset successfully!")
}