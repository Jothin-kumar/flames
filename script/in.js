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