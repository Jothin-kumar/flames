async function reset() {
    hideElem(window.outElem)
    hideElem(window.calcElem)
    resetIn()

    await new Promise(resolve => setTimeout(resolve, 2000))

    const elemsToDelete = document.querySelectorAll('.letter')
    for (let i = 0; i < elemsToDelete.length; i++) {
        elemsToDelete[i].remove()
    }
    const elemsToEmptyIds = ["remaining-letters-count", "flames", "result", "comment"]
    for (let i = 0; i < elemsToEmptyIds.length; i++) {
        document.getElementById(elemsToEmptyIds[i]).innerText = ""
    }
}