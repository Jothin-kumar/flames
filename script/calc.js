async function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

class letter {
    constructor(l, parentElem) {
        this.value = l.toUpperCase()
        this.striked = false

        this.elem = document.createElement('div')
        this.elem.innerText = l
        this.elem.classList.add('letter')
        parentElem.appendChild(this.elem)
    }
    strike() {
        this.elem.classList.add('strike-letter')
        this.striked = true
    }
}
async function letterSplit(name, parentElem) {
    const letters = []
    for (let i = 0; i < name.length; i++) {
        letters.push(new letter(name[i], parentElem))
        await sleep(200)
    }
    return letters
}

async function calc() {
    showElem(calcElem)
    const name1 = document.getElementById('your-name').value
    const name2 = document.getElementById('crush-name').value
    const name1Elem = document.getElementById('name1')
    const name2Elem = document.getElementById('name2')
    await sleep(2000)
    const name1Letters = (await letterSplit(name1, name1Elem)).filter(l => l.value !== " ")
    const name2Letters = (await letterSplit(name2, name2Elem)).filter(l => l.value !== " ")

    for (let i = 0; i < name1Letters.length; i++) {
        for (let j = 0; j < name2Letters.length; j++) {
            if (name1Letters[i].value === name2Letters[j].value && !name1Letters[i].striked && !name2Letters[j].striked) {
                name1Letters[i].strike()
                await sleep(690)
                name2Letters[j].strike()
                await sleep(1380)
            }
        }
    }
}