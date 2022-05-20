const addEffect = {

    scrollto: (el, to) => {
        el.addEventListener('click', e => {
                document.querySelector(`#${to}`).scrollIntoView({
                behavior: 'auto',
                block: 'center',
                inline: 'center'
            });
        })
    },

    scrollin: (el, mode, time = 1000, offset = 1, aprox = 75) => {
        time = Number(time)
        offset = Number(offset)
        el.scrollin = false
        window.addEventListener('scroll', e => {
            const dis = Math.abs(window.scrollY + window.innerHeight - (el.parentNode.offsetTop + el.offsetTop))
            if(!el.scrollin && dis < aprox){
                switch(mode) {
                    case 'fade':
                        el.animate([
                            {opacity: "0"},
                            {opacity: "1"}
                        ],{
                            duration: time,
                            easing: 'ease-in-out'
                        })
                        break
                    case 'left':
                        el.animate([
                            {transform: `translateX(${- window.innerWidth * offset}px)`},
                            {transform: "translateX(0)"}
                        ],{
                            duration: time,
                            easing: 'ease-in-out'
                        })
                        break
                    case 'right':
                        el.animate([
                            {transform: `translateX(${+ window.innerWidth * offset}px)`},
                            {transform: "translateX(0)"}
                        ],{
                            duration: time,
                            easing: 'ease-in-out'
                        })
                        break
                    case 'bottom':
                        el.animate([
                            {transform: `translateY(${+ window.innerHeight * offset}px)`},
                            {transform: "translateY(0)"}
                        ],{
                            duration: time,
                            easing: 'ease-in-out'
                        })
                        break
                    case 'up':
                        el.animate([
                            {transform: `translateY(${- window.innerHeight * offset}px)`},
                            {transform: "translateY(0)"}
                        ],{
                            duration: time,
                            easing: 'ease-in-out'
                        })
                        break
                }
                el.scrollin = true
            }
        })
    }

}

document.querySelectorAll("[effect]").forEach(el => {
    //console.log(el);
	let effects = el.getAttribute("effect").split(" ")
    effects = effects.filter(effect => effect.trim() !== '')
	effects.forEach(effect => {
		const args = effect.split("-");
        try {
            args[1] = args[1].replaceAll('+', '-')
            args[1] = args[1].replaceAll('_', ' ')
            args[1] = args[1].replaceAll('\n', '')
            addEffect[args[0]](el, args[1], args[2], args[3])
        } catch (error) { console.log(args, error) }
	})
})