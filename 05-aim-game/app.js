const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
let time = 0
let score = 0
const MIN_DIAMETER = 10
const MAX_DIAMETER = 40
const colors = ['aqua', 'chartreuse', 'fuchsia', 'greenyellow', 'orange', 'yellow', 'blue']

startBtn.addEventListener('click', event => {
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    const target = event.target
    if (target.classList.contains('time-btn')) {
        time = parseInt(target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    score = 0
    timeEl.parentNode.classList.remove('hide')
    setTime(time)
    createRandomCircle()
    setInterval(decreaseTime, 1000);
}

function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`
}

function decreaseTime() {
    console.log('decreaseTime: ' + time);
    if (time === 0) {
        finishGame()
        return
    }
    let current = --time
    setTime(current)
}

function setTime(value) {
    timeEl.innerHTML = `00:${ value<10 ? '0'+value : value }`
}

function createRandomCircle() {
    const circle = document.createElement('div')
    const diameter = getRandomNumber(MIN_DIAMETER, MAX_DIAMETER)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, width - diameter)
    const y = getRandomNumber(0, height - diameter)
    circle.classList.add('circle')
    circle.style.width = `${diameter}px`
    circle.style.height = `${diameter}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.background = getRandomColor()
    board.append(circle)
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}

