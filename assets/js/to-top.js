const toTop = document.querySelector('#to-top')

toTop.addEventListener('click', () => window.scrollTo(0, 0))

window.addEventListener('scroll', e => {
    if(window.scrollY > 0){
        if(window.getComputedStyle(toTop).getPropertyValue("opacity") == 0){
            toTop.animate([
                {opacity: "0"},
                {opacity: "1"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
        }
    }else{
        if(window.getComputedStyle(toTop).getPropertyValue("opacity") == 1){
            toTop.animate([
                {opacity: "1"},
                {opacity: "0"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
        }
    }
})