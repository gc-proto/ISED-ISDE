function updateText() {
    let yourPlace = document.getElementById("your-famous-place").value;
    document.getElementById("places").innerText = yourPlace;

    for (let hiddenText of document.getElementsByClassName("noseeum")) {
        hiddenText.style.visibility="visible";
    }
}
