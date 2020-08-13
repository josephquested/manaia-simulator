// -- INIT -- //

const ikeButton = document.getElementById('ikeButton')
const ikeMined = document.getElementById('ikeMined')

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