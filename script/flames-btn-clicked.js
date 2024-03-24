window.flamesButtonClicked = () => {
    if (document.getElementById('your-name').value && document.getElementById('crush-name').value) {
        calc()
        disableIn()
        const btn = document.getElementById("flames-btn")
        btn.disabled = true
        btn.classList.add('disabled-flames-btn')
    }
}