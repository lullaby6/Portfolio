const mobileButton = document.querySelector('#mobile-button')
const mobileNav = document.querySelector('#mobile-nav')

mobileNav.state = 'hidden'

window.addEventListener('click', event => {
    if(event.target != mobileButton) hideMobileNav()
})

mobileButton.addEventListener('click', e => {

    if(mobileNav.state == 'hidden'){
        
        mobileNav.animate([
            {transform: "translateX(-100%)"},
            {transform: "translateX(0)"}
        ],{
            duration: 300,
            fill: 'forwards'
        })

        mobileNav.state = 'visible'

    }else{
        hideMobileNav()
    }
})

const hideMobileNav = () => {
    if(mobileNav.state == 'visible'){
        mobileNav.animate([
            {transform: "translateX(0)"},
            {transform: "translateX(-100%)"}
        ],{
            duration: 300,
            fill: 'forwards'
        })
        mobileNav.state = 'hidden'
    }
}