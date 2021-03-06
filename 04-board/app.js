const board = document.querySelector('#board')
const colors = ['aqua', 'chartreuse', 'fuchsia', 'greenyellow', 'orange', 'yellow', 'blue']
const SQUARES_NUMBER = 420
const SQUARES_BACKGROUNDCOLOR = '#1d1d1d'
const SQUARES_BOXSHADOW = '0 0 2px #000'

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    /*square.addEventListener('mouseover', () => {
        setColor(square)
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square)
    })*/
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)
    board.append(square)
}

//function setColor(square) {
function setColor(event) {
    const square = event.target
    const color = getRandomColor()
    square.style.backgroundColor = color
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

//function removeColor(square) {
function removeColor(event) {
    const square = event.target
    //square.style.backgroundColor = SQUARES_BACKGROUNDCOLOR
    //square.style.boxShadow = SQUARES_BOXSHADOW
    square.style.backgroundColor = 'transparent'
    square.style.boxShadow = 'none'
    square.style.border = 'none'
}