function displayOut(r) {
    showElem(window.outElem)
    const result = {
        "F": "Friend",
        "L": "Love",
        "A": "Affection",
        "M": "Marriage",
        "E": "Enemy",
        "S": "Sibling"
    }[r]
    const comment = {
        "F": ":-)",
        "L": "Stop dreaming and start working!",
        "A": ":-|",
        "M": "Stop dreaming and go study!",
        "E": ":-( It's just a game...",
        "S": "It's just a game..."
    }[r]

    document.getElementById('result').innerHTML = result
    document.getElementById('comment').innerHTML = comment

    window.calcOver = true
}