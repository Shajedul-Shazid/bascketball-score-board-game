let displayScore = document.getElementById("display-scorehome")
let displayScoreTwo = document.getElementById("display-scoreguest")

let addHome = 0
let addGuest = 0

function addOneHome() {
     addHome = addHome + 1
     displayScore.textContent = addHome
}

function addTwoHome() {
    addHome = addHome + 2
    displayScore.textContent = addHome
}

function addThreeHome() {
    addHome = addHome + 3
    displayScore.textContent = addHome
}

function addOneGuest() {
    addGuest = addGuest + 1
    displayScoreTwo.textContent = addGuest
}  

function addTwoGuest() {
    addGuest = addGuest + 2
    displayScoreTwo.textContent = addGuest
}

function addThreeGuest() {
    addGuest = addGuest + 3
    displayScoreTwo.textContent = addGuest
}