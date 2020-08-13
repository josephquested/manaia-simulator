// -- INIT -- //

const ikeButton = document.getElementById('ikeButton')
const bankButton = document.getElementById('bankButton')

const dayCounter = document.getElementById('dayCounter')

function bindEventListeners () {
    ikeButton.addEventListener('click', ikeButtonClicked);
    bankButton.addEventListener('click', bankButtonClicked);
}

bindEventListeners();

// -- IKE BUTTON -- //

let _ikeMined = 0

function ikeButtonClicked () {
    _ikeMined++
    ikeMined.innerHTML = `I.K.E MINED: ${_ikeMined}`
}

// -- BANK BUTTON -- //

function bankButtonClicked() {
    ikePost();
}

// -- POSTING -- //

function ikePost() {
    let ikeStr = _ikeMined.toString();
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:3666/bank", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send(ikeStr);
    return true
}
