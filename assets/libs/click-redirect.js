const clickRedirectElements = document.querySelectorAll('[click-redirect]')

clickRedirectElements.forEach(clickRedirectElement => {
    clickRedirectElement.addEventListener('click', () => {
        window.open(clickRedirectElement.getAttribute('click-redirect'), '_blank');
    })
})