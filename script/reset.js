async function reset() {
    hideElem(window.outElem)
    hideElem(window.calcElem)
    resetIn()
    document.getElementById("remaining-letters-special-case-msg").style.display = "none"
    window.calcOver = false
    window.skipAnimation = false
    showElem(document.getElementById('in'))

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

async function replay() {
    const ne1 = document.getElementById('your-name')
    const ne2 = document.getElementById('crush-name')
    const n1 = ne1.value
    const n2 = ne2.value
    await reset()
    ne1.value = n1
    await sleep(500)
    ne2.value = n2
    await sleep(500)
    window.flamesButtonClicked()
}