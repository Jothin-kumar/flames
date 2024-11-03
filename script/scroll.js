window.canAutoScroll = true
window.lastScrollY = 0

function bodyLoadedScroll() {
    window.mainElem.addEventListener('scroll', function() {
        if (window.mainElem.scrollTop < window.lastScrollY && window.calcOver) {
            window.canAutoScroll = false
        }
        else if (!window.calcOver){
            window.canAutoScroll = true
        }
        window.lastScrollY = window.mainElem.scrollTop
    })
    function scrollHandler() {
        if (window.canAutoScroll) {
            window.mainElem.scrollTo(0, window.mainElem.scrollHeight)
        }
        setTimeout(scrollHandler, 1)
    }
    scrollHandler()
}

window.addEventListener("resize", function() {
    setTimeout(function() {
        window.canAutoScroll = true
    }, 100)
})