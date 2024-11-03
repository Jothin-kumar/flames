function bodyLoadedAnim() {
    window.mainElem = document.getElementById('main');
    window.calcElem = document.getElementById('calc');
    window.outElem =document.getElementById('out');
}

function showElem(elem) {
    elem.classList.remove('hide-slide');
    elem.classList.add('show-slide');
}
function hideElem(elem) {
    elem.classList.remove('show-slide');
    elem.classList.add('hide-slide');
}

function skipAnim() {
    window.skipAnimation = true
}
function showSkipAnimBtn() {
    document.getElementById('skip-anim-btn').style.display = "block"
}
function hideSkipAnimBtn() {
    document.getElementById('skip-anim-btn').style.display = "none"
}