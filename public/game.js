// -- INIT -- //

const ikeButton = document.getElementById('ikeButton')
const bankButton = document.getElementById('bankButton')
const resetButton = document.getElementById('resetButton')

const hungerButtons = document.getElementsByClassName('hungerButton')
const thirstButtons = document.getElementsByClassName('thirstButton')
const fatigueButtons = document.getElementsByClassName('fatigueButton')
const whelmButtons = document.getElementsByClassName('whelmButton')

const dayCounter = document.getElementById('dayCounter')

function bindEventListeners () {
    ikeButton.addEventListener('click', ikeButtonClicked);
    bankButton.addEventListener('click', bankButtonClicked);
    resetButton.addEventListener('click', resetButtonClicked);
    Object.keys(hungerButtons).forEach((key) => { hungerButtons[key].addEventListener('click', hungerButtonClicked) })
    Object.keys(thirstButtons).forEach((key) => { thirstButtons[key].addEventListener('click', thirstButtonClicked) })
    Object.keys(fatigueButtons).forEach((key) => { fatigueButtons[key].addEventListener('click', fatigueButtonClicked) })
    Object.keys(whelmButtons).forEach((key) => { whelmButtons[key].addEventListener('click', whelmButtonClicked) })
}

window.addEventListener('DOMContentLoaded', (event) => {
    bindEventListeners()
    updateUIStatuses();
});


// -- IKE BUTTON -- //

let _ikeMined = 0

function ikeButtonClicked () {
    audio = new Audio(`./audio/hat${Math.floor(Math.random() * 5)}.wav`)
    audio.play()
    _ikeMined++
    ikeMined.innerHTML = `I.K.E MINED: ${_ikeMined}`
}

// -- BANK BUTTON -- //

function bankButtonClicked() {
    audio = new Audio(`./audio/cash.mp3`)
    audio.play()
    ikePost()
}

// -- STATUS BUTTONS -- //

function hungerButtonClicked(e) {
    let index = Object.values(hungerButtons).indexOf(e.target)
    audio = new Audio(`./audio/bite.wav`)
    audio.play()
    statPost('hunger', index)
}

function thirstButtonClicked(e) {
    let index = Object.values(thirstButtons).indexOf(e.target)
    audio = new Audio(`./audio/glug.wav`)
    audio.play()
    statPost('thirst', index)
}

function fatigueButtonClicked(e) {
    let index = Object.values(fatigueButtons).indexOf(e.target)
    audio = new Audio(`./audio/yawn.wav`)
    audio.play()
    statPost('fatigue', index)
}

function whelmButtonClicked(e) {
    let index = Object.values(whelmButtons).indexOf(e.target)
    audio = new Audio(`./audio/ahh.wav`)
    audio.play()
    statPost('whelm', index)
}

// -- RENDER -- //

function updateUIStatuses() {
    let students = document.getElementsByClassName('student');
    let keys = Object.keys(students)
    keys.forEach(key => {

        let student = students[key]
        let name = student.getElementsByClassName('name')[0]

        let elements = [
            student.getElementsByClassName('hunger')[0],
            student.getElementsByClassName('thirst')[0],
            student.getElementsByClassName('fatigue')[0],
            student.getElementsByClassName('whelm')[0]
        ]

        elements.forEach(element => {
            setTextColor(element)
        })

        setDeadName(name, elements)
    })
}

// -- DEATH -- //

function setDeadName(name, elements) {
    let isDead = true
    elements.forEach((element) => {
        if (element.dataset.status > 0)
            isDead = false
    })

    if (isDead) {
        name.innerHTML = name.dataset.name + " (DEAD)"
        name.classList.add('red')
    } else {
        name.innerHTML = name.dataset.name
        name.classList.remove('red')
    }
}

function setTextColor(element) {
    if (element.dataset.status <= 0)
        element.classList.add('red')
    else {
        element.classList.remove('red')
    }
}

// -- RESET -- //

function resetButtonClicked () {
    resetPost()
}

// -- POSTING -- //

// increase ike // 

function ikePost() {
    let ikeStr = _ikeMined.toString();
    let request = new XMLHttpRequest();
    let address = window.location.href == "http://localhost:3666/" ? "http://localhost:3666/" : 'https://manaia-2020-simulator.herokuapp.com/'

    request.onreadystatechange = () =>
    {
        if (request.readyState == 4 && request.status == 200)
            location.reload()
    }

    request.open("POST", `${address}bank`, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(ikeStr);
}

// increase stat // 

function statPost(stat, id) {

    let ikeTotal = document.getElementById('ikeTotal').dataset.total

    
    if (ikeTotal < 10) {
        alert("NOT ENOUGH IKE!")
    } else {
        let request = new XMLHttpRequest();
        let address = window.location.href == "http://localhost:3666/" ? "http://localhost:3666/" : 'https://manaia-2020-simulator.herokuapp.com/'
        
        console.log(`INCREASING ${stat} for ${id}`)
    
        request.onreadystatechange = () =>
        {
            if (request.readyState == 4 && request.status == 200)
                location.reload()
        }
    
        request.open("POST", `${address}stat?stat=${stat}&id=${id}`, true);
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send(`INCREASING ${stat} for ${id}`);
    }
}


// reset all //

function resetPost() {
    let request = new XMLHttpRequest();
    let address = window.location.href == "http://localhost:3666/" ? "http://localhost:3666/" : 'https://manaia-2020-simulator.herokuapp.com/'
    
    request.onreadystatechange = () =>
    {
        if (request.readyState == 4 && request.status == 200)
        location.reload()
    }
    
    request.open("POST", `${address}reset`, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send("RESET");
}
