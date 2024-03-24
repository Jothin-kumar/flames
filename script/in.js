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
}