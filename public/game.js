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
    let request = new XMLHttpRequest();
    let address = window.location.href == "http://localhost:3666/" ? "http://localhost:3666/" : 'https://manaia-2020-simulator.herokuapp.com/'

    alert(address)

    request.onreadystatechange = () =>
    {
        if (request.readyState == 4 && request.status == 200)
            location.reload()
    }

    request.open("POST", "http://localhost:3666/bank", true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(ikeStr);
}
