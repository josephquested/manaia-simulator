// -- INIT -- //

const ikeButton = document.getElementById('ikeButton')
const ikeMined = document.getElementById('ikeMined')

const dayCounter = document.getElementById('dayCounter')

function bindEventListeners () {
    ikeButton.addEventListener('click', ikeButtonClicked);
}

bindEventListeners();

// -- IKE BUTTON -- //

let _ikeMined = 0

function ikeButtonClicked () {
    _ikeMined++
    ikeMined.innerHTML = `I.K.E MINED: ${_ikeMined}`
}

// -- DAY COUNTER -- //

