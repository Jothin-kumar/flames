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