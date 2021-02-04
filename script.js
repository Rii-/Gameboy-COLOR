/**
 * Javascript for the GameBoy COLOR CSS project
 * 
 * @author Henri Paulus
 *
 **/

const insertBlueVersion = document.querySelector('.js-blue')
const insertRedVersion = document.querySelector('.js-red')
const insertGreenVersion = document.querySelector('.js-green')
const insertYellowVersion = document.querySelector('.js-yellow')
const gameBoy = document.querySelector('.js-gb')
const gif = document.querySelector('.js-gif')
const power = document.querySelector('.js-gbpowerswitch')
const ledGlow = document.querySelector('.js-gbpowerled')
const arrow = document.querySelector('.js-arrow')
const warning = document.querySelector('.js-warning')
const gbAudio = new Audio('sounds/startup.mp3')
const blueAudio = new Audio('sounds/bluemusic.mp3')
const redAudio = new Audio('sounds/redmusic.mp3')
const greenAudio = new Audio('sounds/greenmusic.mp3')
const yellowAudio = new Audio('sounds/yellowmusic.mp3')
const switchAudio = new Audio('sounds/switch.mp3')
var isOn = Boolean(false)
var firstBoot = Boolean(true)
var insertedGame = 0
blueAudio.volume = 0.6
redAudio.volume = 0.6
greenAudio.volume = 0.6
yellowAudio.volume = 0.6

const hide = () => {
    insertRedVersion.classList.remove('hide')
    insertGreenVersion.classList.remove('hide')
    insertYellowVersion.classList.remove('hide')
    insertBlueVersion.classList.remove('hide')
}

const animatearrow = () => {
    arrow.classList.add('animate')
}

const hidewarning = () => {
    warning.classList.remove('show')
}
const playblue = () => {
    blueAudio.play()
}

const playred = () => {
    redAudio.play()
}

const playgreen = () => {
    greenAudio.play()
}

const playyellow = () => {
    yellowAudio.play()
}

//Does not work:
//const insertblue = () =>
function insertblue() {
    gameBoy.classList.remove('loadanimation')

    if (firstBoot == true) {
        setTimeout(animatearrow, 3000)
    }

    if (insertedGame == 0) {
        this.classList.toggle('startblue')
        this.classList.remove('swapblue')
        gameBoy.classList.toggle('startgb')
        insertRedVersion.classList.remove('swapred')
        insertGreenVersion.classList.remove('swapgreen')
        insertYellowVersion.classList.remove('swapyellow')
        insertRedVersion.classList.toggle('hide')
        insertGreenVersion.classList.toggle('hide')
        insertYellowVersion.classList.toggle('hide')
        insertRedVersion.classList.remove('loadanimation')
        insertBlueVersion.classList.remove('loadanimation')
        insertGreenVersion.classList.remove('loadanimation')
        insertYellowVersion.classList.remove('loadanimation')
        insertedGame = 1
    } else if (insertedGame == 1 && isOn == false) {
        setTimeout(hide, 3000)
        this.classList.toggle('swapblue')
        this.classList.remove('startblue')
        gameBoy.classList.toggle('startgb')
        insertRedVersion.classList.toggle('hide')
        insertGreenVersion.classList.toggle('hide')
        insertYellowVersion.classList.toggle('hide')
        insertedGame = 0
    } else if (insertedGame == 1 && isOn == true) {
        warning.classList.add('show')
        setTimeout(hidewarning, 4000)
    }
}

function insertred() {
    gameBoy.classList.remove('loadanimation')

    if (firstBoot == true) {
        setTimeout(animatearrow, 3000)
    }

    if (insertedGame == 0) {
        this.classList.toggle('startred')
        this.classList.remove('swapred')
        gameBoy.classList.toggle('startgb')
        insertBlueVersion.classList.remove('swapblue')
        insertGreenVersion.classList.remove('swapgreen')
        insertYellowVersion.classList.remove('swapyellow')
        insertGreenVersion.classList.toggle('hide')
        insertBlueVersion.classList.toggle('hide')
        insertYellowVersion.classList.toggle('hide')
        insertRedVersion.classList.remove('loadanimation')
        insertBlueVersion.classList.remove('loadanimation')
        insertGreenVersion.classList.remove('loadanimation')
        insertYellowVersion.classList.remove('loadanimation')
        insertedGame = 2
    } else if (insertedGame == 2 && isOn == false) {
        setTimeout(hide, 3000)
        this.classList.toggle('swapred')
        this.classList.remove('startred')
        gameBoy.classList.toggle('startgb')
        insertGreenVersion.classList.toggle('hide')
        insertBlueVersion.classList.toggle('hide')
        insertYellowVersion.classList.toggle('hide')
        insertedGame = 0
    } else if (insertedGame == 2 && isOn == true) {
        warning.classList.add('show')
        setTimeout(hidewarning, 4000)
    }
}

function insertgreen() {
    gameBoy.classList.remove('loadanimation')

    if (firstBoot == true) {
        setTimeout(animatearrow, 3000)
    }

    if (insertedGame == 0) {
        this.classList.toggle('startgreen')
        this.classList.remove('swapgreen')
        gameBoy.classList.toggle('startgb')
        insertRedVersion.classList.remove('swapred')
        insertBlueVersion.classList.remove('swapblue')
        insertYellowVersion.classList.remove('swapyellow')
        insertRedVersion.classList.toggle('hide')
        insertBlueVersion.classList.toggle('hide')
        insertYellowVersion.classList.toggle('hide')
        insertRedVersion.classList.remove('loadanimation')
        insertBlueVersion.classList.remove('loadanimation')
        insertGreenVersion.classList.remove('loadanimation')
        insertYellowVersion.classList.remove('loadanimation')
        insertedGame = 3
    } else if (insertedGame == 3 && isOn == false) {
        setTimeout(hide, 3000)
        this.classList.toggle('swapgreen')
        this.classList.remove('startgreen')
        gameBoy.classList.toggle('startgb')
        insertRedVersion.classList.toggle('hide')
        insertBlueVersion.classList.toggle('hide')
        insertYellowVersion.classList.toggle('hide')
        insertedGame = 0
    } else if (insertedGame == 3 && isOn == true) {
        warning.classList.add('show')
        setTimeout(hidewarning, 4000)
    }

}

function insertyellow() {
    gameBoy.classList.remove('loadanimation')

    if (firstBoot == true) {
        setTimeout(animatearrow, 3000)
    }

    if (insertedGame == 0) {
        this.classList.toggle('startyellow')
        this.classList.remove('swapyellow')
        gameBoy.classList.toggle('startgb')
        insertRedVersion.classList.remove('swapred')
        insertGreenVersion.classList.remove('swapgreen')
        insertBlueVersion.classList.remove('swapblue')
        insertRedVersion.classList.toggle('hide')
        insertBlueVersion.classList.toggle('hide')
        insertGreenVersion.classList.toggle('hide')
        insertRedVersion.classList.remove('loadanimation')
        insertBlueVersion.classList.remove('loadanimation')
        insertGreenVersion.classList.remove('loadanimation')
        insertYellowVersion.classList.remove('loadanimation')
        insertedGame = 4
    } else if (insertedGame == 4 && isOn == false) {
        setTimeout(hide, 3000)
        this.classList.toggle('swapyellow')
        this.classList.remove('startyellow')
        gameBoy.classList.toggle('startgb')
        insertRedVersion.classList.toggle('hide')
        insertBlueVersion.classList.toggle('hide')
        insertGreenVersion.classList.toggle('hide')
        insertedGame = 0
    } else if (insertedGame == 4 && isOn == true) {
        warning.classList.add('show')
        setTimeout(hidewarning, 4000)
    }
}

function powerON() {
    ledGlow.classList.toggle('gbpowerledglow')
    switchAudio.play()
    
    if (firstBoot == true) {
        arrow.classList.remove('animate')
        firstBoot = false
    }

    if (isOn == false && insertedGame == 0) {
        this.classList.toggle('gbpoweron')
        this.classList.remove('gbpoweroff')
        gif.classList.add('gbstartup')
        isOn = true
        gbAudio.play()
    } else if (isOn == false) {
        this.classList.toggle('gbpoweron')
        this.classList.remove('gbpoweroff')
        gif.classList.remove('gbbluegif')
        gif.classList.remove('gbredgif')
        gif.classList.remove('gbgreengif')
        gif.classList.remove('gbyellowgif')
        insertRedVersion.classList.remove('hide')
        insertBlueVersion.classList.remove('hide')
        insertGreenVersion.classList.remove('hide')
        insertYellowVersion.classList.remove('hide')
        isOn = true
        gbAudio.play()
    } else {
        blueAudio.pause()
        blueAudio.currentTime = 0
        redAudio.pause()
        redAudio.currentTime = 0
        greenAudio.pause()
        greenAudio.currentTime = 0
        yellowAudio.pause()
        yellowAudio.currentTime = 0
        this.classList.toggle('gbpoweroff')
        this.classList.remove('gbpoweron')
        gif.classList.remove('gbstartup')
        gif.classList.remove('gbbluegif')
        gif.classList.remove('gbredgif')
        gif.classList.remove('gbgreengif')
        gif.classList.remove('gbyellowgif')
        isOn = false
    }

    if (insertedGame == 1 && isOn == true) {
        gif.classList.toggle('gbbluegif')
        setTimeout(playblue, 3000)
    } else if (insertedGame == 2 && isOn == true) {
        gif.classList.toggle('gbredgif')
        setTimeout(playred, 4000)
    } else if (insertedGame == 3 && isOn == true) {
        gif.classList.toggle('gbgreengif')
        setTimeout(playgreen, 3500)
    } else if (insertedGame == 4 && isOn == true) {
        gif.classList.toggle('gbyellowgif')
        setTimeout(playyellow, 3000)
    }
}

insertBlueVersion.addEventListener('click', insertblue)
insertRedVersion.addEventListener('click', insertred)
insertGreenVersion.addEventListener('click', insertgreen)
insertYellowVersion.addEventListener('click', insertyellow)
power.addEventListener('click', powerON)