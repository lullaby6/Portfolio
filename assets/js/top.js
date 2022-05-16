const topButton = document.querySelector('#top')

topButton.addEventListener('click', () => window.scrollTo(0, 0))

window.addEventListener('scroll', e => {

    if(window.scrollY > 0){
        if(window.getComputedStyle(topButton).getPropertyValue("opacity") == 0){
            topButton.animate([
                {opacity: "0"},
                {opacity: "1"}
            ],{
                duration: 500,
                fill: 'forwards'
            })
        }
    }else{
        if(window.getComputedStyle(topButton).getPropertyValue("opacity") == 1){
            topButton.animate([
                {opacity: "1"},
                {opacity: "0"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
        }
    }

})