function loadedIn() {
    const ins = document.querySelectorAll('input')
    for (let i = 0; i < ins.length; i++) {
        const inEl = ins[i]
        function handler(elem) {
            const val = elem.value
            const l = val.length
            if (l === 1) {
                elem.value = ""
            }
            elem.setSelectionRange(l - 1, l);
        }
        inEl.addEventListener('keydown', function(e) {
            const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            e.preventDefault()
            if (inEl.value.length >= 21 && e.key !== "Backspace") {
                return
            }
            if (alphabets.includes(e.key) || e.key === " ") {
                inEl.value = inEl.value.slice(0, -1) + e.key + "|"
            }
            if (e.key === "Backspace") {
                inEl.value = inEl.value.slice(0, -2) + "|"
            }
            handler(inEl)
        })
        inEl.addEventListener('focusout', function() {
            if (inEl.value.endsWith("|")) {
                inEl.value = inEl.value.slice(0, -1)
            }
        })
        inEl.addEventListener('focus', function() {
            if (inEl.value && !inEl.value.endsWith("|")) {
                inEl.value += "|"
                const l = elem.value.length
                inEl.setSelectionRange(l - 1, l);
            }
        })
    }

    window.flamesButtonClicked = () => {
        if (document.getElementById('your-name').value && document.getElementById('crush-name').value) {
            calc()
            for (let i = 0; i < ins.length; i++) {
                ins[i].disabled = true
            }
            const btn = document.getElementById("flames-btn")
            btn.disabled = true
            btn.classList.add('disabled-flames-btn')
        }
    }
    window.resetIn = () => {
        for (let i = 0; i < ins.length; i++) {
            ins[i].value = ""
            ins[i].disabled = false
        }
        const btn = document.getElementById("flames-btn")
        btn.disabled = false
        btn.classList.remove('disabled-flames-btn')
    }
}