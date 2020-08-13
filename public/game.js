// -- INIT -- //

const ikeButton = document.getElementById("ikeButton");

function bindEventListeners () {
    ikeButton.addEventListener("click", ikeButtonClicked);
}

bindEventListeners();

// -- IKE BUTTON -- //

function ikeButtonClicked () {
    console.log('clicked')
}