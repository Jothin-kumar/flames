async function sleep (ms) {
    return new Promise(resolve => setTimeout(resolve, window.skipAnimation ? 0 : ms))
}

class letter {
    constructor(l, parentElem) {
        this.value = l.toUpperCase()
        this.striked = false

        this.elem = document.createElement('div')
        this.actualText = l
        this.elem.innerText = l
        this.elem.classList.add('letter')
        parentElem.appendChild(this.elem)
    }
    strike() {
        this.elem.classList.add('strike-letter')
        this.striked = true
    }
    jump(l=null) {
        if (l) {
            this.elem.innerText = l
        }
        this.elem.classList.add('jump-letter')
        setTimeout(() => {
            this.elem.classList.remove('jump-letter')
            this.elem.innerText = this.actualText
        }, 1000)
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

const nameSimplify = (name) => name.trim().replace(/  +/g, ' ')

async function calc() {
    showElem(calcElem)
    const yourName = nameSimplify(document.getElementById('your-name').value)
    const crushName = nameSimplify(document.getElementById('crush-name').value)
    let name1, name2
    if (yourName.length > crushName.length) {
        name1 = crushName
        name2 = yourName
    }
    else {
        name1 = yourName
        name2 = crushName
    }
    const name1Elem = document.getElementById('name1')
    const name2Elem = document.getElementById('name2')
    await sleep(2000)
    showSkipAnimBtn()
    const canStrikeCharacter = (chr) => chr !== " " && "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".includes(chr)
    const name1Letters = (await letterSplit(name1, name1Elem)).filter(l => canStrikeCharacter(l.value))
    const name2Letters = (await letterSplit(name2, name2Elem)).filter(l => canStrikeCharacter(l.value))

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

    const remainingLettersCount = name1Letters.concat(name2Letters).filter(l => !l.striked).length || 60
    const remainingCountElems = document.getElementById("remaining-letters-count")
    remainingCountElems.innerText = `${remainingLettersCount} letters`
    if (remainingLettersCount === 60) {
        document.getElementById("remaining-letters-special-case-msg").style.display = "block"
        remainingCountElems.innerText = "Special Case"
    }
    await sleep(500)
    remainingCountElems.style.display = "block"
    await sleep(500)

    let flames = await letterSplit("FLAMES", document.getElementById("flames"))
    const getFlames = () => flames.filter(l => !l.striked)
    const getIndex = (l) => l % getFlames().length
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < remainingLettersCount; j++) {
            if (skipAnimation) break
            getFlames()[getIndex(j)].jump(j+1)
            await sleep(1000)
        }
        let toStrikeIndex = getIndex(remainingLettersCount - 1)
        getFlames()[toStrikeIndex].strike()
        flames = flames.slice(toStrikeIndex + 1).concat(flames.slice(0, toStrikeIndex))      
        await sleep(1500)
    }
    hideSkipAnimBtn()

    displayOut(flames[0].value)
}