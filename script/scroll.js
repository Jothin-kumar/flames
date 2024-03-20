window.canAutoScroll = true
window.lastScrollY = 0

function bodyLoadedScroll() {
    window.mainElem.addEventListener('scroll', function() {
        if (window.mainElem.scrollTop < window.lastScrollY) {
            window.canAutoScroll = false
        }
        else {
            window.canAutoScroll = true
        }
        window.lastScrollY = window.mainElem.scrollTop
    })
    function scrollHandler() {
        if (window.canAutoScroll) {
            window.mainElem.scrollTo(0, window.mainElem.scrollHeight)
        }
        setTimeout(scrollHandler, 100)
    }
    scrollHandler()
}