function bodyLoadedIn() {
    const ins = document.querySelectorAll('input')
    const btn = document.getElementById("flames-btn")
    for (let i = 0; i < ins.length; i++) {
        const elem = ins[i]
        elem.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                btn.click()
            }
        })
    }

    window.disableIn = () => {
        for (let i = 0; i < ins.length; i++) {
            ins[i].disabled = true
        }
        btn.disabled = true
        btn.classList.add('disabled-flames-btn')
    }
    window.resetIn = () => {
        for (let i = 0; i < ins.length; i++) {
            ins[i].value = ""
            ins[i].disabled = false
        }
        btn.disabled = false
        btn.classList.remove('disabled-flames-btn')
    }
}