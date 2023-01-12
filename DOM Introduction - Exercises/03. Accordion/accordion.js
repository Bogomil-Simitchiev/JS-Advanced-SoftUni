function toggle() {

    let btnElement = document.getElementsByClassName('button')[0];
    let hiddenTextElement = document.getElementById('extra');

    if (btnElement.textContent == `More`) {
        hiddenTextElement.style.display = `block`;
        btnElement.textContent = `Less`;
    } else {
        hiddenTextElement.style.display = `none`;
        btnElement.textContent = `More`;
    }

}