const sectionsElements = document.querySelectorAll('section')
const cursorElement = document.querySelector('#cursor')
const navIconElement = document.querySelector('#nav-icon')
const navElement = document.querySelector('#nav-c nav')
const typeElements = document.querySelectorAll('.type')

// sectionsElements.forEach((sectionElement, index) => {
//     index !== 0 && (sectionElement.style.display = 'none')
// })

window.addEventListener('mousemove', event => {
    cursorElement.animate(
        [
            {translate: `${event.clientX}px ${event.clientY}px`},
        ],
        {
            duration: 1000,
            delay: 50,
            easing: "ease-in-out",
            fill: 'forwards',
        }
    )

    const cursorStyle = window.getComputedStyle(event.target).cursor

    if(cursorStyle == 'pointer' && !cursorElement.pointer) {
        cursorElement.animate(
            [
                {scale: '2.5'},
            ],
            {
                duration: 250,
                easing: "ease-in-out",
                fill: 'forwards',
            }
        )
        cursorElement.pointer = true
    }else if(cursorStyle != 'pointer' && cursorElement.pointer){
        cursorElement.animate(
            [
                {scale: '1'},
            ],
            {
                duration: 250,
                easing: "ease-in-out",
                fill: 'forwards',
            }
        )
        cursorElement.pointer = false
    }
})

navIconElement.addEventListener('click', () => {
    if(!navElement.opened) {
        navElement.opened = true
        navElement.style.display = 'flex'
        navElement.animate(
            [
                {translate: '-100% 0', opacity: '0'},
                {translate: '0', opacity: '1'},
            ],
            {
                duration: 750,
                easing: "ease-in-out",
                fill: 'forwards',
            }
        )
        navIconElement.classList.add('selected')
        navIconElement.setAttribute('icon', 'ic:baseline-close')
    }else{
        navElement.opened = false
        navElement.animate(
            [
                {translate: '0', opacity: '1'},
                {translate: '-100% 0', opacity: '0'},
            ],
            {
                duration: 750,
                easing: "ease-in-out",
                fill: 'forwards',
            }
        )
        navIconElement.classList.remove('selected')
        navIconElement.setAttribute('icon', 'material-symbols:menu')
    }
})

typeElements.forEach(typeElement => {
    let length = 0
    let delay = 150
    function typeTimeout() {
        length++
        typeElement.style.maxWidth = `${length}ch`
        if(length <= typeElement.innerHTML.length) setTimeout(typeTimeout, delay)
        else typeElement.style.border = 'none'
        // if(length == typeElement.innerHTML.length) typeElement.style.border = 'none'
    }
    setTimeout(typeTimeout, delay)

})

const scrollTopElement = document.querySelector('#scroll-top')

scrollTopElement.addEventListener('click', () => window.scrollTo({top: 0, behavior: 'smooth'}))

window.addEventListener('scroll', () => {
    if(window.scrollY > window.innerHeight/2 && !scrollTopElement.displaying) {
        scrollTopElement.style.display = 'block'
        scrollTopElement.animate(
            [
                {translate: '0 100%', opacity: '0'},
                {translate: '0', opacity: '.25'},
            ],
            {
                duration: 500,
                easing: "ease-in-out",
                fill: 'forwards',
            }
        )
        scrollTopElement.displaying = true
    }else if(window.scrollY < window.innerHeight/2 && scrollTopElement.displaying){
        const scrollTopElementHideAnimation = scrollTopElement.animate(
            [
                {translate: '0 100%', opacity: '0'},
            ],
            {
                duration: 500,
                easing: "ease-in-out",
                fill: 'forwards',
            }
        )
        scrollTopElementHideAnimation.onfinish = () => {
            scrollTopElement.style.display = "none";
        }
        scrollTopElement.displaying = false
    }
})