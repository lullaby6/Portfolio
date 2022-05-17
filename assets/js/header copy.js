const header = document.querySelector('#header')

header.state = 'visible'
header.timer = null

window.addEventListener('scroll', e => {

    if(header.timer !== null) {
        clearTimeout(header.timer)   
    }
    header.timer = setTimeout(() => {
        //stop scrolling
        if(header.state == 'hidden'){
            header.animate([
                {transform: "translateY(-100%)"},
                {transform: "translateY(0)"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
            header.state = 'visible'
        }
    }, 1000);

    if(window.oldScroll > window.scrollY){
        //scrolling up
        if(header.state == 'hidden'){
            header.animate([
                {transform: "translateY(-100%)"},
                {transform: "translateY(0)"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
            header.state = 'visible'
        }
    }else{
        //scrolling down
        if(header.state == 'visible'){
            header.animate([
                {transform: "translateY(0)"},
                {transform: "translateY(-100%)"}
            ],{
                duration: 250,
                fill: 'forwards'
            })
            header.state = 'hidden'
        }
    }
    window.oldScroll = window.scrollY

})